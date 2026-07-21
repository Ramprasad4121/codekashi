import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Audit Reports | Ramprasad',
  description: 'Smart contract security audit reports by Ramprasad — findings across DeFi lending, bridges, DEXs, and more.',
}

const audits = [
  { name: 'MetaLend', slug: 'metalend', description: 'Solana lending protocol — Critical fake-oracle vulnerability discovered', findings: { C: 2, H: 9, M: 2, L: 0 } },
  { name: 'Vault Guardians', slug: 'vault-guardians', description: 'DeFi vault management protocol', findings: { C: 0, H: 3, M: 1, L: 2 } },
  { name: 'ThunderLoan', slug: 'thunderloan', description: 'Flash loan protocol', findings: { C: 0, H: 2, M: 2, L: 2 } },
  { name: 'BossBridge', slug: 'bossbridge', description: 'Cross-chain bridge protocol', findings: { C: 0, H: 4, M: 1, L: 1 } },
  { name: 'Tswap', slug: 'tswap', description: 'Decentralized exchange protocol', findings: { C: 0, H: 4, M: 2, L: 2 } },
  { name: 'PuppyRaffle', slug: 'puppyraffle', description: 'NFT raffle protocol', findings: { C: 0, H: 4, M: 3, L: 0 } },
  { name: 'PasswordStore', slug: 'passwordstore', description: 'On-chain password storage protocol', findings: { C: 0, H: 2, M: 0, L: 0 } },
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
          Public smart contract security audit reports. Each report includes detailed findings, severity classifications, and remediation recommendations.
        </p>

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
            <a
              key={audit.name}
              href={`/audits/${audit.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-900/30 hover:px-3 transition-all duration-300 -mx-3 px-3"
            >
              <div className="flex-1 mb-3 sm:mb-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {audit.name}
                  </h3>
                  <span className="text-zinc-700 text-xs group-hover:text-white transition-colors">→</span>
                </div>
                <p className="text-sm text-zinc-500">{audit.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Badge label="Crit" count={audit.findings.C} colorClass="text-red-500/80 group-hover:text-red-400" />
                <Badge label="High" count={audit.findings.H} colorClass="text-orange-500/80 group-hover:text-orange-400" />
                <Badge label="Med" count={audit.findings.M} colorClass="text-yellow-500/80 group-hover:text-yellow-400" />
                <Badge label="Low" count={audit.findings.L} colorClass="text-zinc-500/80 group-hover:text-zinc-400" />
              </div>
            </a>
          ))}
        </div>
      </main>
      <div className="max-w-3xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
