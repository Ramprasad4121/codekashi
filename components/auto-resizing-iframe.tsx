'use client'

import { useState, useRef, useEffect } from 'react'

export default function AutoResizingIframe({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const observerRef = useRef<ResizeObserver | null>(null)
  const [height, setHeight] = useState('100vh')
  const [isCrossOrigin, setIsCrossOrigin] = useState(false)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      // Disconnect previous observer if any
      observerRef.current?.disconnect()

      try {
        const doc = iframe.contentWindow?.document
        if (!doc || !doc.body) throw new Error('No document body')

        // Suppress iframe's own scrollbar — we expand the iframe to full height instead
        doc.documentElement.style.overflow = 'hidden'
        doc.body.style.overflow = 'hidden'

        const measure = () => {
          const h = Math.max(
            doc.documentElement.scrollHeight,
            doc.documentElement.offsetHeight,
            doc.body.scrollHeight,
            doc.body.offsetHeight,
          )
          if (h > 0) setHeight(`${h}px`)
        }

        // Measure immediately and on every resize
        measure()

        const observer = new ResizeObserver(measure)
        observer.observe(doc.body)
        observerRef.current = observer

      } catch {
        // Cross-origin iframe (e.g. Google Docs, external embed)
        // Fall back to a tall fixed height so the user can scroll inside
        setIsCrossOrigin(true)
        setHeight('calc(100vh - 56px)')
      }
    }

    iframe.addEventListener('load', handleLoad)

    return () => {
      iframe.removeEventListener('load', handleLoad)
      observerRef.current?.disconnect()
    }
  }, [url])

  return (
    <iframe
      ref={iframeRef}
      src={url}
      title={title}
      className="w-full border-0 block"
      style={{
        height,
        // Only allow internal scroll for cross-origin frames
        overflowY: isCrossOrigin ? 'auto' : 'hidden',
      }}
      // scrolling attr is deprecated but still respected in most browsers
      scrolling={isCrossOrigin ? 'yes' : 'no'}
    />
  )
}
