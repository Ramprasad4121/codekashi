'use client'

export default function AutoResizingIframe({ url, title }: { url: string; title: string }) {
  return (
    <iframe
      src={url}
      title={title}
      className="w-full h-full border-0"
    />
  )
}
