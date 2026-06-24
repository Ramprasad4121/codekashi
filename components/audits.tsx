'use client'

import { motion } from 'framer-motion'

const audits = [
  { name: 'MetaLend', slug: 'metalend', findings: { C: 2, H: 9, M: 2, L: 0 } },
  { name: 'Vault Guardians', slug: 'vault-guardians', findings: { C: 0, H: 3, M: 1, L: 2 } },
  { name: 'ThunderLoan', slug: 'thunderloan', findings: { C: 0, H: 2, M: 2, L: 2 } },
  { name: 'BossBridge', slug: 'bossbridge', findings: { C: 0, H: 4, M: 1, L: 1 } },
  { name: 'Tswap', slug: 'tswap', findings: { C: 0, H: 4, M: 2, L: 2 } },
  { name: 'PuppyRaffle', slug: 'puppyraffle', findings: { C: 0, H: 4, M: 3, L: 0 } },
  { name: 'PasswordStore', slug: 'passwordstore', findings: { C: 0, H: 2, M: 0, L: 0 } },
]

function Badge({ label, count, colorClass, bgClass }: { label: string; count: number; colorClass: string; bgClass: string }) {
  if (count === 0) return null
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border transition-colors ${colorClass} ${bgClass}`}>
      {count} {label}
    </span>
  )
}

export default function Audits() {
  return (
    <section id="audits" className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center mb-12">
             <div className="flex items-center gap-4 pr-6">
               <h2 className="text-white text-xl font-medium tracking-tight">
                 Protocol Audits
               </h2>
             </div>
             <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="flex flex-col space-y-4">
            {audits.map((audit, i) => (
              <motion.a
                key={audit.name}
                href={`/audits/${audit.slug}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] hover:bg-[#111111] hover:border-zinc-700/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-rust)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
                
                <div className="relative z-10 flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-600 transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-lg text-zinc-200 group-hover:text-white transition-colors">
                    {audit.name}
                  </span>
                </div>
                
                <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3">
                  <Badge label="Crit" count={audit.findings.C} colorClass="text-red-400 group-hover:text-red-300" bgClass="bg-red-500/10 border-red-500/20 group-hover:border-red-500/40" />
                  <Badge label="High" count={audit.findings.H} colorClass="text-orange-400 group-hover:text-orange-300" bgClass="bg-orange-500/10 border-orange-500/20 group-hover:border-orange-500/40" />
                  <Badge label="Med" count={audit.findings.M} colorClass="text-yellow-400 group-hover:text-yellow-300" bgClass="bg-yellow-500/10 border-yellow-500/20 group-hover:border-yellow-500/40" />
                  <Badge label="Low" count={audit.findings.L} colorClass="text-zinc-400 group-hover:text-zinc-300" bgClass="bg-zinc-500/10 border-zinc-500/20 group-hover:border-zinc-500/40" />
                  
                  <div className="hidden sm:flex ml-2 w-8 h-8 rounded-full bg-zinc-900 items-center justify-center border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 flex justify-start sm:justify-end">
            <a
              href="https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
            >
              <span className="underline decoration-zinc-800 underline-offset-4 group-hover:decoration-zinc-500 transition-colors">
                View all reports
              </span>
              <span className="text-zinc-600 group-hover:text-white transition-colors">→</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
