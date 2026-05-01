'use client'

import { motion } from 'framer-motion'

const audits = [
  { name: 'MetaLend', findings: { C: 2, H: 9, M: 2, L: 0 } },
  { name: 'Vault Guardians', findings: { C: 0, H: 3, M: 1, L: 2 } },
  { name: 'ThunderLoan', findings: { C: 0, H: 2, M: 2, L: 2 } },
  { name: 'BossBridge', findings: { C: 0, H: 4, M: 1, L: 1 } },
  { name: 'Tswap', findings: { C: 0, H: 4, M: 2, L: 2 } },
  { name: 'PuppyRaffle', findings: { C: 0, H: 4, M: 3, L: 0 } },
  { name: 'PasswordStore', findings: { C: 0, H: 2, M: 0, L: 0 } },
]

function Badge({ label, count, colorClass }: { label: string; count: number; colorClass: string }) {
  if (count === 0) return null
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] ${colorClass}`}>
      <span className="w-1 h-1 rounded-full bg-current opacity-70" />
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

          <div className="flex flex-col">
            {audits.map((audit, i) => (
              <motion.a
                key={audit.name}
                href="https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-zinc-900/50 hover:px-2 transition-all duration-300 -mx-2 px-2"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                  <span className="font-mono text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {audit.name}
                  </span>
                  <span className="text-zinc-600 text-xs group-hover:text-white transition-colors">→</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                  <Badge label="Crit" count={audit.findings.C} colorClass="text-red-500/80 group-hover:text-red-400" />
                  <Badge label="High" count={audit.findings.H} colorClass="text-orange-500/80 group-hover:text-orange-400" />
                  <Badge label="Med" count={audit.findings.M} colorClass="text-yellow-500/80 group-hover:text-yellow-400" />
                  <Badge label="Low" count={audit.findings.L} colorClass="text-zinc-500/80 group-hover:text-zinc-400" />
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
