'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'SRP',
    description: 'Security Reasoning Protocol (SRP) is an AI-native Web3 security operating system for EVM and Solana protocols. It is designed around evidence-first security workflows: intent extraction, vulnerability discovery, adversarial debate, exploit validation, runtime monitoring, and audit-grade reporting.',
    tags: ['TypeScript', 'AI', 'security', 'smart-contracts'],
    link: 'https://github.com/Ramprasad4121/srp',
    
  },
  
  {
    name: 'Anchor Sentinel',
    description: 'Anchor-Sentinel is a static analysis framework for Solana & Anchor programs written in Rust. It runs a suite of vulnerability detectors to identify critical security flaws, prints detailed audit reports, and—unlike traditional tools—automatically generates executable Proof-of-Concept (POC) exploits. Anchor-Sentinel enables developers to find vulnerabilities, understand attack vectors through generated code, and verify fixes instantly',
    tags: ['Solidity', 'security', 'sentinel', 'DeFi'],
    link: 'https://github.com/Ramprasad4121/anchor-sentinel',
    
  },

  {
    name: 'BAL Daemon',
    description: 'A Rust daemon that generates BEP-592 Block-Level Access List payloads for BSC block builders..',
    tags: ['Rust', 'DeFi', 'monitoring', 'balancer'],
    link: 'https://github.com/Ramprasad4121/bal-daemon',
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

          <div className="flex flex-col space-y-12 md:space-y-16">
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
                className="group block"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 flex items-center">
                    <GithubIcon />
                    <span className="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-zinc-400 transition-colors">
                      {project.name}
                    </span>
                    <span className="ml-1 text-zinc-600 group-hover:text-white transition-colors">→</span>
                  </h3>
                  
                
                </div>
                
                <p className="text-base sm:text-lg leading-[1.8] text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
