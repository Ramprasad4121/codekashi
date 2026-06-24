'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'SRP',
    description: 'Security Reasoning Protocol — an agentic audit workbench for smart contract vulnerability discovery with automated analysis pipelines and PoC generation.',
    tags: ['TypeScript', 'AI', 'security', 'smart-contracts'],
    link: 'https://github.com/Ramprasad4121/srp',
    stars: 12, // Dummy star count to mimic vitto.cc style
  },
  {
    name: 'BAL Daemon',
    description: 'Daemon process for monitoring Balancer protocol health metrics, detecting anomalies in pool compositions and triggering alerts for potential security incidents.',
    tags: ['Rust', 'DeFi', 'monitoring', 'balancer'],
    link: 'https://github.com/Ramprasad4121/bal-daemon',
    stars: 8,
  },
  {
    name: 'Anchor Sentinel',
    description: 'Security sentinel for the Anchor protocol ecosystem — watches for governance attacks, oracle deviations, and suspicious liquidation patterns in real-time.',
    tags: ['Solidity', 'security', 'sentinel', 'DeFi'],
    link: 'https://github.com/Ramprasad4121/anchor-sentinel',
    stars: 24,
  },
]

// Simple SVG Github Icon
const GithubIcon = ({ className = "inline-block mr-2 text-zinc-500 group-hover:text-white transition-colors" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.89a5.06 5.06 0 0 0-1.38-3.6 5.17 5.17 0 0 0-.14-3.52s-1.13-.36-3.6 1.3a12.2 12.2 0 0 0-6.5 0c-2.47-1.66-3.6-1.3-3.6-1.3a5.17 5.17 0 0 0-.14 3.52A5.06 5.06 0 0 0 2 8.09c0 6.35 3.34 7.54 6.48 7.89A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
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
                 Projects
               </h2>
               <a 
                 href="https://github.com/Ramprasad4121" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center text-zinc-500 hover:text-white transition-colors"
               >
                 <GithubIcon className="inline-block w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
               </a>
             </div>
             <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/60 bg-[#0a0a0a] hover:bg-[#111111] hover:border-zinc-700/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-rust)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                      <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                    {project.stars !== null && (
                      <span className="font-mono text-xs text-zinc-500 flex items-center gap-1 group-hover:text-zinc-300 transition-colors bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800/50">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-medium text-zinc-200 group-hover:text-white transition-colors duration-200 mb-3">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-zinc-400 mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-rust)] bg-[var(--accent-rust)]/10 px-2.5 py-1 rounded-full border border-[var(--accent-rust)]/20 group-hover:border-[var(--accent-rust)]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
