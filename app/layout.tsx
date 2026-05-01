import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, DM_Serif_Display } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'Ramprasad — Security Researcher & Smart Contract Auditor',
  description:
    'Security researcher and smart contract auditor. Building ARGUS. Winner of $25K BNB Chain grant. 7 protocol audits completed.',
  openGraph: {
    title: 'Ramprasad — Security Researcher & Smart Contract Auditor',
    description:
      'Security researcher and smart contract auditor. Building ARGUS. Winner of $25K BNB Chain grant.',
    url: 'https://ramprasad.dev',
    siteName: 'Ramprasad',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramprasad — Security Researcher',
    description: 'Security researcher and smart contract auditor.',
    creator: '@0xramprasad',
  },
  metadataBase: new URL('https://ramprasad.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  )
}
