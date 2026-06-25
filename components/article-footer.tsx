'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Feedback = {
  id: string;
  type: 'thought' | 'topic';
  text: string;
  createdAt: string;
}

type ArticleData = {
  likes: number;
  feedbacks: Feedback[];
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
function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
function LightbulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
export default function ArticleFooter({ slug }: { slug: string }) {
  const [data, setData] = useState<ArticleData>({ likes: 0, feedbacks: [] })
  const [liked, setLiked] = useState(false)
  const [likeLoading, setLikeLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'thought' | 'topic'>('thought')

  // Form
  const [text, setText] = useState('')
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Derived counts
  const thoughtCount = data.feedbacks.filter(f => f.type === 'thought').length
  const topicCount = data.feedbacks.filter(f => f.type === 'topic').length

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

  // ── Submit feedback ────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed || formStatus === 'submitting') return

    setFormStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/article/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, type: activeTab, text: trimmed }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Submit failed')
      }

      const updated: ArticleData = await res.json()
      setData(updated)
      setText('')
      setFormStatus('success')

      // Reset success state after 2.5s but keep modal open to show the new item
      setTimeout(() => setFormStatus('idle'), 2500)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Try again.'
      setErrorMsg(message)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  // ── Open modal ─────────────────────────────────────────────────────────────
  const openModal = (tab: 'thought' | 'topic') => {
    setActiveTab(tab)
    setText('')
    setFormStatus('idle')
    setErrorMsg('')
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => {
      setText('')
      setFormStatus('idle')
      setErrorMsg('')
    }, 300) // after exit animation
  }

  // Auto-focus textarea when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 100)
    }
  }, [isOpen, activeTab])

  // ── Filtered lists ─────────────────────────────────────────────────────────
  const thoughts = data.feedbacks.filter(f => f.type === 'thought').reverse()
  const topics = data.feedbacks.filter(f => f.type === 'topic').reverse()
  const currentList = activeTab === 'thought' ? thoughts : topics

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

          <div className="w-px h-5 bg-zinc-200 mx-1" />

          {/* Thoughts */}
          <button
            onClick={() => openModal('thought')}
            aria-label="Read and leave thoughts"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 active:scale-95 transition-all duration-200"
          >
            <ChatIcon />
            <span>{isLoading ? '—' : `${thoughtCount} ${thoughtCount === 1 ? 'Thought' : 'Thoughts'}`}</span>
          </button>

          <div className="w-px h-5 bg-zinc-200 mx-1" />

          {/* Suggest */}
          <button
            onClick={() => openModal('topic')}
            aria-label="Suggest a topic"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 active:scale-95 transition-all duration-200"
          >
            <LightbulbIcon />
            <span className="hidden sm:inline">{isLoading ? '—' : `${topicCount} ${topicCount === 1 ? 'Suggestion' : 'Suggestions'}`}</span>
            <span className="sm:hidden">Suggest</span>
          </button>

        </div>
      </div>

      {/* ── Modal ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
            />

            {/* Sheet — slides up from bottom on mobile, centered on desktop */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="
                fixed z-50 bg-white shadow-2xl flex flex-col
                inset-x-0 bottom-0 rounded-t-3xl max-h-[85vh]
                sm:inset-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2
                sm:w-[520px] sm:max-h-[70vh] sm:rounded-2xl
              "
              onClick={e => e.stopPropagation()}
            >
              {/* Drag handle (mobile) */}
              <div className="flex justify-center pt-3 pb-1 sm:hidden">
                <div className="w-10 h-1 bg-zinc-200 rounded-full" />
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100">
                <div className="flex gap-1 bg-zinc-100 rounded-full p-1">
                  <button
                    onClick={() => { setActiveTab('thought'); setText(''); setFormStatus('idle') }}
                    className={`
                      px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                      ${activeTab === 'thought' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}
                    `}
                  >
                    💬 Thoughts {thoughtCount > 0 && <span className="ml-1 text-zinc-400">({thoughtCount})</span>}
                  </button>
                  <button
                    onClick={() => { setActiveTab('topic'); setText(''); setFormStatus('idle') }}
                    className={`
                      px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                      ${activeTab === 'topic' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-800'}
                    `}
                  >
                    💡 Suggest {topicCount > 0 && <span className="ml-1 text-zinc-400">({topicCount})</span>}
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto overscroll-contain">

                {/* Compose form */}
                <form onSubmit={handleSubmit} className="p-5 border-b border-zinc-100">
                  <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={e => {
                      // Cmd/Ctrl+Enter to submit
                      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                        e.preventDefault()
                        handleSubmit(e as unknown as React.FormEvent)
                      }
                    }}
                    placeholder={
                      activeTab === 'thought'
                        ? 'What did you think of this piece?'
                        : 'What topic should I write about next?'
                    }
                    rows={3}
                    disabled={formStatus === 'submitting'}
                    className="w-full resize-none bg-transparent text-zinc-900 placeholder:text-zinc-400 text-sm leading-relaxed focus:outline-none disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-100">
                    <span className={`text-xs font-medium transition-colors ${
                      formStatus === 'error' ? 'text-red-500' :
                      formStatus === 'success' ? 'text-emerald-600' :
                      'text-zinc-400'
                    }`}>
                      {formStatus === 'error' ? errorMsg :
                       formStatus === 'success' ? '✓ Submitted! Thank you.' :
                       formStatus === 'submitting' ? 'Sending...' :
                       'Visible to everyone · ⌘+Enter to send'}
                    </span>
                    <button
                      type="submit"
                      disabled={!text.trim() || formStatus === 'submitting'}
                      className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending
                        </>
                      ) : 'Send'}
                    </button>
                  </div>
                </form>

                {/* Feedback list */}
                <div className="p-5">
                  {currentList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <span className="text-3xl mb-3">{activeTab === 'thought' ? '💬' : '💡'}</span>
                      <p className="text-sm text-zinc-500 font-medium">
                        {activeTab === 'thought'
                          ? 'No thoughts yet. Be the first!'
                          : 'No suggestions yet. Have an idea?'}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        {activeTab === 'thought' ? `${thoughtCount} ${thoughtCount === 1 ? 'Thought' : 'Thoughts'}` : `${topicCount} ${topicCount === 1 ? 'Suggestion' : 'Suggestions'}`}
                      </p>
                      <AnimatePresence initial={false}>
                        {currentList.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3"
                          >
                            <p className="text-zinc-800 text-sm leading-relaxed">{item.text}</p>
                            <span className="text-[10px] text-zinc-400 mt-2 block">
                              {new Date(item.createdAt).toLocaleDateString('en-US', {
                                month: 'short', day: 'numeric', year: 'numeric'
                              })}
                            </span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
