'use client'

import { useState, useRef, useEffect } from 'react'

export default function AutoResizingIframe({ url, title }: { url: string, title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState('calc(100vh - 53px)')

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      try {
        const doc = iframe.contentWindow?.document
        if (doc && doc.body) {
          // Hide iframe's internal scrollbar since we are perfectly resizing it
          doc.documentElement.style.overflow = 'hidden'
          doc.body.style.overflow = 'hidden'

          // Use ResizeObserver for buttery smooth, exact height tracking without polling
          const observer = new ResizeObserver(() => {
            const contentHeight = Math.max(
              doc.body.scrollHeight, 
              doc.documentElement.scrollHeight,
              doc.body.offsetHeight
            )
            setHeight(`${contentHeight}px`)
          })
          observer.observe(doc.body)
          
          // Initial set
          setHeight(`${Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, doc.body.offsetHeight)}px`)
        }
      } catch (error) {
        // Cross-origin fallback: let the iframe handle its own scrolling
        console.log('Cross-origin iframe detected, falling back to fixed height with internal scrolling.')
      }
    }

    iframe.addEventListener('load', handleLoad)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={url}
      className="w-full border-0 bg-white"
      style={{ height, transition: 'height 0.2s ease-out' }}
      title={title}
    />
  )
}
