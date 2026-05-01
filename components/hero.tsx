'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'


export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [showGlitch, setShowGlitch] = useState(false)
  const [glitchLines, setGlitchLines] = useState({ top1: 50, top2: 50 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  // Mouse-following light effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }, [])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])



  // Periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchLines({ top1: Math.random() * 100, top2: Math.random() * 100 })
      setShowGlitch(true)
      setTimeout(() => setShowGlitch(false), 200)
    }, 5000)
    return () => clearInterval(glitchInterval)
  }, [])

  // Scroll progress for pillar
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#050505' }}
      >
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Hero image — using CSS background-image for full coverage */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.6,
            filter: 'contrast(1.3) grayscale(0.15)',
          }}
        />

        {/* Halftone dot overlay on the image */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '4px 4px',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Dynamic mouse-following rust-orange light */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(232, 98, 44, 0.18), rgba(220, 20, 60, 0.06) 40%, transparent 70%)`,
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#050505]/30 z-[3]" />


        {/* Glitch effect layer */}
        {showGlitch && (
          <div className="absolute inset-0 z-[6] pointer-events-none overflow-hidden">
            <div className="absolute inset-0 opacity-60"
              style={{
                animation: 'glitch-h 0.3s steps(2) forwards',
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232, 98, 44, 0.03) 2px, rgba(232, 98, 44, 0.03) 4px)',
              }}
            />
            <div className="absolute w-full h-[2px] bg-[rgba(232,98,44,0.4)]" style={{ top: `${glitchLines.top1}%` }} />
            <div className="absolute w-full h-[1px] bg-[rgba(220,20,60,0.3)]" style={{ top: `${glitchLines.top2}%` }} />
          </div>
        )}

        {/* Bottom + top gradient fades */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#050505] to-transparent z-[7]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505]/70 to-transparent z-[7]" />

        {/* Bokeh depth-of-field vignette */}
        <div className="absolute inset-0 z-[6] pointer-events-none" style={{
          boxShadow: 'inset 0 0 150px 60px #050505',
        }} />

        {/* Centered text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-[10] text-center px-6"
        >
          <h1
            className="text-[clamp(3.5rem,9vw,8rem)] font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-8"
            style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #f0f0f0 0%, #c0c0c0 50%, #f0f0f0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              animation: 'flicker 3s ease-in-out infinite',
            }}
          >
            Ramprasad
          </h1>

          {/* Subtitle */}
          <div className="h-6 flex items-center justify-center">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Smart Contract Security Researcher
            </p>
          </div>
        </motion.div>

        {/* Scroll down button — like vitto.cc mouse icon */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-14 left-1/2 -translate-x-1/2 z-[20] flex flex-col items-center gap-3 cursor-pointer group"
          aria-label="Scroll down"
        >
          <div className="w-7 h-11 rounded-full border-2 border-white/20 group-hover:border-white/40 flex items-start justify-center pt-2 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">
            Scroll Down
          </span>
        </motion.button>


      </section>

      {/* Progress pillar */}
      <div className="progress-pillar">
        <div
          className="progress-pillar-fill"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}
