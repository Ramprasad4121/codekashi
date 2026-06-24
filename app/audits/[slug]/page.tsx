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
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-900/50 bg-[#000000]">
        <div className="flex items-center gap-4">
          <Link href="/#audits" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            <span>←</span> Back to Profile
          </Link>
        </div>
        <div className="font-mono text-sm tracking-wide text-zinc-400 capitalize">
          {params.slug.replace('-', ' ')} Audit Report
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
