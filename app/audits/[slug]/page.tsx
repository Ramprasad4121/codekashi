import Link from 'next/link';
import { notFound } from 'next/navigation';

const validSlugs = [
  'metalend',
  'vault-guardians',
  'thunderloan',
  'bossbridge',
  'tswap',
  'puppyraffle',
  'passwordstore'
];

export default function AuditPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-[#000000] text-zinc-200 font-sans">
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-900/50 bg-[#000000]">
        <div className="flex-1 flex items-center justify-start">
          <Link href="/#audits" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest">
            <span>←</span> <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center font-mono text-xs sm:text-sm tracking-wide text-zinc-400 capitalize text-center truncate px-2">
          {params.slug.replace('-', ' ')}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <a href={`/reports/${params.slug}.pdf`} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-rust)] hover:text-white transition-colors flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest">
            <span className="hidden sm:inline">Open PDF</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </header>
      <main className="flex-1 w-full bg-zinc-950">
        <iframe
          src={`/reports/${params.slug}.pdf`}
          className="w-full h-full border-0"
          title={`${params.slug} Audit Report`}
        />
      </main>
    </div>
  );
}
