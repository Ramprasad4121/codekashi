import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Audit Reports | Ramprasad',
  description: 'Public smart contract audit reports by Ramprasad. 7 audits across EVM and Solana: lending, bridges, DEXs, vaults and more.',
}

const REPO = 'https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports'

// Counts come from the "Issues found" table in each published report.
const audits = [
  { name: 'MetaLend', slug: 'metalend', chain: 'Solana', description: 'Solana lending protocol. Critical fake-oracle bug found.', source: `${REPO}/blob/main/MetaLend%20Security%20Audit%20Report.pdf`, findings: { C: 2, H: 9, M: 2, L: 0 } },
  { name: 'Vault Guardians', slug: 'vault-guardians', chain: 'EVM', description: 'DeFi vault management protocol', source: `${REPO}/blob/main/vault-guardians.pdf`, findings: { C: 0, H: 3, M: 1, L: 2 } },
  { name: 'ThunderLoan', slug: 'thunderloan', chain: 'EVM', description: 'Flash loan protocol', source: `${REPO}/blob/main/Thunder-Loan-Audit-Report.pdf`, findings: { C: 0, H: 2, M: 2, L: 2 } },
  { name: 'BossBridge', slug: 'bossbridge', chain: 'EVM', description: 'Cross-chain bridge protocol', source: `${REPO}/blob/main/Boss-Bridge-Audit-Report.pdf`, findings: { C: 0, H: 4, M: 1, L: 1 } },
  { name: 'Tswap', slug: 'tswap', chain: 'EVM', description: 'Decentralized exchange protocol', source: `${REPO}/blob/main/tswap-audit.pdf`, findings: { C: 0, H: 4, M: 2, L: 2 } },
  { name: 'PuppyRaffle', slug: 'puppyraffle', chain: 'EVM', description: 'NFT raffle protocol', source: `${REPO}/blob/main/Puppy-Raffle-Audit-Report.pdf`, findings: { C: 0, H: 4, M: 3, L: 0 } },
  { name: 'PasswordStore', slug: 'passwordstore', chain: 'EVM', description: 'On-chain password storage protocol', source: `${REPO}/blob/main/PasswordStore-Audit-Report.pdf`, findings: { C: 0, H: 2, M: 0, L: 1 } },
]

const credentials = [
  { title: '7 audits', detail: 'Across EVM and Solana / Anchor. Public reports below.' },
  { title: 'Solana Foundation certified Security Researcher', detail: 'RektOff x Solana Foundation Rust Security Bootcamp.' },
  { title: 'Anchor-Sentinel', detail: 'Rust static analyzer for Anchor programs. 26 detectors. v0.2.1 released.', href: 'https://github.com/Ramprasad4121/anchor-sentinel' },
  { title: 'SRP, Security Reasoning Protocol', detail: 'AI-native Web3 security tooling for EVM and Solana. In progress.', href: 'https://github.com/Ramprasad4121/srp' },
]

function Badge({ label, count, colorClass }: { label: string; count: number; colorClass: string }) {
  if (count === 0) return null
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] ${colorClass}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {count} {label}
    </span>
  )
}

export default function AuditsPage() {
  const totalFindings = audits.reduce((acc, a) => ({
    C: acc.C + a.findings.C,
    H: acc.H + a.findings.H,
    M: acc.M + a.findings.M,
    L: acc.L + a.findings.L,
  }), { C: 0, H: 0, M: 0, L: 0 })

  return (
    <div className="bg-[#000000] min-h-screen font-sans text-zinc-400">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        {/* Back to Home */}
        <div className="mb-8">
          <Link href="/#audits" className="text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            <span>←</span> Back to Home
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex items-center mb-12">
           <div className="flex items-center gap-4 pr-6">
             <h1 className="text-white text-3xl font-medium tracking-tight">
               Audit Reports
             </h1>
           </div>
           <div className="h-[1px] flex-1 bg-zinc-900/50" />
        </div>

        <p className="text-base sm:text-lg text-zinc-400 mb-10 leading-[1.8] max-w-xl">
          Smart contract security researcher across EVM and Solana. Every report here is public, with findings, severity and fixes.
        </p>

        {/* Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {credentials.map((c) => {
            const inner = (
              <>
                <div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {c.title}{c.href && <span className="text-zinc-700 text-xs ml-2 group-hover:text-white transition-colors">→</span>}
                </div>
                <div className="text-sm text-zinc-500 mt-1 leading-relaxed">{c.detail}</div>
              </>
            )
            return c.href ? (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] hover:border-zinc-700 transition-colors">
                {inner}
              </a>
            ) : (
              <div key={c.title} className="group p-4 rounded-xl border border-zinc-800/60 bg-[#0a0a0a]">
                {inner}
              </div>
            )
          })}
        </div>

        {/* Availability */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] mb-14">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-emerald-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Open for audits
            </div>
            <p className="text-sm text-zinc-500 mt-2">Solidity and Solana / Anchor. Book a 30 min call to talk scope.</p>
          </div>
          <a
            href="https://calendly.com/ramprasadedigi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-rust)] hover:text-white transition-colors"
          >
            Book a call <span>→</span>
          </a>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-xl border border-zinc-800/60 bg-[#0a0a0a]">
            <div className="font-mono text-2xl font-bold text-white">{audits.length}</div>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 mt-1">Protocols</div>
          </div>
          <div className="p-4 rounded-xl border border-red-900/30 bg-red-950/10">
            <div className="font-mono text-2xl font-bold text-red-400">{totalFindings.C}</div>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-red-500/60 mt-1">Critical</div>
          </div>
          <div className="p-4 rounded-xl border border-orange-900/30 bg-orange-950/10">
            <div className="font-mono text-2xl font-bold text-orange-400">{totalFindings.H}</div>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-orange-500/60 mt-1">High</div>
          </div>
          <div className="p-4 rounded-xl border border-yellow-900/30 bg-yellow-950/10">
            <div className="font-mono text-2xl font-bold text-yellow-400">{totalFindings.M + totalFindings.L}</div>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-yellow-500/60 mt-1">Med + Low</div>
          </div>
        </div>

        {/* Audit List */}
        <div className="flex flex-col">
          {audits.map((audit) => (
            <div
              key={audit.name}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-900/30 hover:px-3 transition-all duration-300 -mx-3 px-3"
            >
              <a href={`/audits/${audit.slug}`} className="flex-1 mb-3 sm:mb-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {audit.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">{audit.chain}</span>
                  <span className="text-zinc-700 text-xs group-hover:text-white transition-colors">→</span>
                </div>
                <p className="text-sm text-zinc-500">{audit.description}</p>
              </a>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Badge label="Crit" count={audit.findings.C} colorClass="text-red-500/80 group-hover:text-red-400" />
                <Badge label="High" count={audit.findings.H} colorClass="text-orange-500/80 group-hover:text-orange-400" />
                <Badge label="Med" count={audit.findings.M} colorClass="text-yellow-500/80 group-hover:text-yellow-400" />
                <Badge label="Low" count={audit.findings.L} colorClass="text-zinc-500/80 group-hover:text-zinc-400" />
                <a href={audit.source} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.1em] text-zinc-600 hover:text-white transition-colors">
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-zinc-500">
          All reports live on{' '}
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline decoration-zinc-800 underline-offset-4 hover:text-white hover:decoration-zinc-500 transition-colors">
            GitHub
          </a>
          . Counts are taken from each report&apos;s summary table.
        </p>
      </main>
      <div className="max-w-3xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
