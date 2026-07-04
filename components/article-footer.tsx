'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

type ArticleData = {
  likes: number;
}

// ─────────────────────────────────────────
// Icons (inline SVG to avoid dependencies)
// ─────────────────────────────────────────
function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
export default function ArticleFooter({ slug }: { slug: string }) {
  const [data, setData] = useState<ArticleData>({ likes: 0 })
  const [liked, setLiked] = useState(false)
  const [likeLoading, setLikeLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // ── Load data ──────────────────────────────────────────────────────────────
  const loadData = useCallback(async () => {
    try {
      const res = await fetch(`/api/article?slug=${encodeURIComponent(slug)}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      })
      if (!res.ok) throw new Error('Failed to load')
      const json: ArticleData = await res.json()
      setData(json)
    } catch {
      // Silently fail — data stays at defaults
    } finally {
      setIsLoading(false)
    }
  }, [slug])

  useEffect(() => {
    // Restore liked state from localStorage (per-slug, per-browser)
    try {
      if (localStorage.getItem(`liked_${slug}`) === 'true') {
        setLiked(true)
      }
    } catch { /* private/incognito mode – ignore */ }

    loadData()
  }, [slug, loadData])

  // ── Like ───────────────────────────────────────────────────────────────────
  const handleLike = async () => {
    if (liked || likeLoading) return

    // Optimistic update immediately
    setLiked(true)
    setLikeLoading(true)
    setData(prev => ({ ...prev, likes: prev.likes + 1 }))

    try {
      localStorage.setItem(`liked_${slug}`, 'true')
    } catch { /* ignore */ }

    try {
      const res = await fetch('/api/article/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      if (!res.ok) throw new Error('Like failed')
      const updated: ArticleData = await res.json()
      // Sync with server's actual count
      setData(updated)
    } catch {
      // Rollback on failure
      setLiked(false)
      setLikeLoading(false)
      setData(prev => ({ ...prev, likes: Math.max(0, prev.likes - 1) }))
      try {
        localStorage.removeItem(`liked_${slug}`)
      } catch { /* ignore */ }
    } finally {
      setLikeLoading(false)
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Action Bar ─────────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-t border-zinc-100 flex justify-center py-8">
        <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-full shadow-sm px-2 py-1.5">

          {/* Like */}
          <button
            onClick={handleLike}
            disabled={liked || likeLoading}
            aria-label={liked ? 'Already liked' : 'Like this article'}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${liked
                ? 'text-rose-500 bg-rose-50 cursor-default'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 active:scale-95'
              }
              ${likeLoading ? 'opacity-60' : ''}
            `}
          >
            <motion.span
              key={liked ? 'liked' : 'not-liked'}
              initial={liked ? { scale: 0.5 } : false}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <HeartIcon filled={liked} />
            </motion.span>
            <span>
              {isLoading ? '—' : data.likes}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

