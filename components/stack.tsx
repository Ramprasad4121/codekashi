'use client'

import { motion } from 'framer-motion'

const ecosystems = [
  {
    label: 'Solidity / EVM',
    accent: '#e8622c',
    tools: ['Foundry', 'Storage-slot analysis', 'Upgradeable contract patterns'],
  },
  {
    label: 'Rust / Solana',
    accent: '#e8622c',
    tools: ['Anchor', 'SBPF-level bytecode analysis', 'Token-2022', 'PDA / CPI security'],
  },
  {
    label: 'TypeScript / Next.js',
    accent: '#e8622c',
    tools: ['Tooling', 'Dashboards'],
  },
  {
    label: 'Python',
    accent: '#e8622c',
    tools: ['Security tooling', 'ML-adjacent backend work'],
  },
]

export default function Stack() {
  return (
    <section
      id="stack"
      className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center mb-12">
            <div className="flex items-center gap-4 pr-6">
              <h2 className="text-white text-xl font-medium tracking-tight">
                Stack
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {ecosystems.map((eco, i) => (
              <motion.div
                key={eco.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-5 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] hover:border-zinc-700/80 hover:bg-[#111111] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${eco.accent}08, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Ecosystem label */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: eco.accent }}
                    />
                    <h3
                      className="font-mono text-sm font-medium tracking-wide"
                      style={{ color: eco.accent }}
                    >
                      {eco.label}
                    </h3>
                  </div>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-2">
                    {eco.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-block font-mono text-[11px] tracking-wide text-zinc-400 bg-zinc-900/80 border border-zinc-800/60 rounded-md px-2.5 py-1 group-hover:text-zinc-300 group-hover:border-zinc-700/60 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
