'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Audits', href: '/#audits' },
  { label: 'Writing', href: '/blog' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        pastHero
          ? 'backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* RP logo — monospaced, heavier weight, anchored feel */}
        <Link
          href="/#hero"
          className="font-mono text-lg font-black text-[var(--text-main)] tracking-[-0.05em] hover:text-[var(--accent-rust)] transition-colors duration-300 border-b-2 border-transparent hover:border-[var(--accent-rust)]"
        >
          RP<span className="text-[var(--accent-rust)]">.</span>
        </Link>

        {/* Desktop links — hidden when hero is in view */}
        <div
          className={`hidden sm:flex items-center gap-8 transition-all duration-500 ${
            pastHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`sm:hidden flex flex-col gap-[5px] p-2 transition-all duration-500 ${
            pastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Menu"
        >
          <span className={`w-5 h-[1.5px] bg-[var(--text-muted)] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-[var(--text-muted)] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {mobileOpen && pastHero && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden border-t border-white/[0.03] bg-[#050505]/95 backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
