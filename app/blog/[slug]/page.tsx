import Link from 'next/link';
import { notFound } from 'next/navigation';
import AutoResizingIframe from '@/components/auto-resizing-iframe';

const postsMap: Record<string, string> = {
  "chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986": "/writings/chainlink-automation-isnt-a-cron-job-its-a-consensus-decision-4986.html",
  "why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9": "/writings/why-blocktimestamp-is-an-nft-mint-exploit-waiting-to-happen-and-what-vrf-actually-does-instead-4en9.html",
  "chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1": "/writings/chainlinks-foundation-layer-explained-for-smart-contract-auditors-51g1.html",
  "the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f": "/writings/the-latestrounddata-footgun-that-drained-two-defi-protocols-for-195m-581f.html",
  "reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c": "/writings/reading-the-ocr-protocol-so-you-dont-have-to-but-you-should-anyway-3a1c.html",
  "dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5": "/writings/dons-are-not-multisigs-the-architecture-difference-that-actually-matters-for-security-2ml5.html",
  "before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a": "/writings/before-ocr-how-chainlink-used-to-work-and-why-it-had-to-change-275a.html",
  "the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap": "/writings/the-oracle-problem-isnt-about-data-its-about-trust-minimization-jap.html",
  "step-finance-incident": "https://docs.google.com/document/d/1RWfatb-H2O0kiwTdE5_nvcPcwhsP4LQFWLkirliiSiM/preview",
  "proof-of-stake-vs-proof-of-work": "/writings/proof-of-stake-vs-proof-of-work.html",
  "trail-of-bits-raising-the-standard": "/writings/trail-of-bits-raising-the-standard.html",
  "ethereum-vs-solana": "/writings/ethereum-vs-solana.html",
  "major-defi-security-incidents-january-2025": "/writings/major-defi-security-incidents-january-2025.html",
  "thala-protocol-recovery": "/writings/thala-protocol-recovery.html",
  "unchecked-external-calls-polter-finance": "/writings/unchecked-external-calls-polter-finance.html",
  "governance-vulnerabilities-aquadao": "/writings/governance-vulnerabilities-aquadao.html",
  "mutation-testing-penpie": "/writings/mutation-testing-penpie.html",
  "trail-of-bits-leading-the-way": "/writings/trail-of-bits-leading-the-way.html",
  "understanding-evm-opcodes": "/writings/understanding-evm-opcodes.html",
  "soc2-type-1-and-2-guide": "/writings/soc2-guide.html"
};

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  const url = postsMap[params.slug];
  if (!url) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-[#000000] text-zinc-200 font-sans overflow-hidden">
      <header className="flex items-center justify-between px-6 h-14 border-b border-zinc-900/50 bg-[#000000] shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/#writing" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            <span>←</span> Back to Home
          </Link>
        </div>
        <div className="font-mono text-sm tracking-wide text-zinc-400 capitalize truncate max-w-sm sm:max-w-md">
          {params.slug.replace(/-/g, ' ')}
        </div>
      </header>
      <main className="flex flex-col w-full bg-zinc-950 flex-1 overflow-hidden">
        <AutoResizingIframe url={url} title={`${params.slug} Article`} />
      </main>
    </div>
  );
}
