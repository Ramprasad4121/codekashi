'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const experience = [
    {
      company: 'Protocol Audits',
      role: '7+ Smart Contracts Audited'
    },
    {
      company: 'Chainlink',
      url: 'https://chain.link/enthusiasts',
      role: 'Community Enthusiast'
    }
  ]

  const certifications = [
    {
      title: 'Rust Security Bootcamp',
      issuer: 'RektOff × Solana Foundation',
      type: 'Certificate',
      url: '/Ramprasad_rektoff.pdf'
    },
    {
      title: 'Rust Security Bootcamp',
      issuer: 'RektOff × Solana Foundation',
      type: 'Skill Report',
      url: '/Report_Ramprasad_rektoff.pdf'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          
          {/* Left: 1-bit style portrait mimicking vitto.cc */}
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-48 sm:w-64 md:w-full aspect-square mx-auto md:mx-0"
          >
             <div className="relative w-full h-full grayscale contrast-150 brightness-[0.8] mix-blend-luminosity">
               {/* Dither / Halftone Overlay */}
               <div 
                 className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-60" 
                 style={{ 
                   backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'white\'/%3E%3C/svg%3E")', 
                   backgroundSize: '4px 4px' 
                 }} 
               />
               <Image
                  src="/Ramprasad.png"
                  alt="Ramprasad"
                  fill
                  className="object-cover"
               />
             </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-white text-xl sm:text-2xl font-medium mb-8 tracking-tight">
                Smart Contract Security Researcher
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg leading-[1.8] text-zinc-400 text-justify">
                <p>
                  I&apos;m a certified smart contract security researcher by RektOff x Solana Foundation and computer science graduate (2022–2026) working as a smart contract security researcher and Rust/Solidity engineer across EVM and Solana, and a Chainlink Community Enthusiast. So far I have done seven private audits, including a Critical fake-oracle vulnerability in a Solana lending protocol, and I hold a certification from the RektOff × Solana Foundation Rust Security Bootcamp. Right now I&apos;m auditing the chainlink-evm repo and building ARGUS, an open-source multi-agent platform that runs the full smart contract audit lifecycle, because I think security tooling needs to be as good as the attackers it&apos;s up against. I care about staying at the intersection of security and AI agent development rather than picking one and leaving the other behind.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Experience / Affiliations */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 mb-2">Experience & Affiliations</h3>
                {experience.map((emp, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between group py-3 border-b border-zinc-900/50 last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                        {emp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 sm:mt-0">
                      <span className="text-sm text-zinc-500 font-mono text-left sm:text-right">
                        {emp.role}
                      </span>
                      {emp.url && emp.url !== '#' && (
                        <a 
                          href={emp.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-500 transition-colors"
                          aria-label={`Link to ${emp.company}`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications & Reports */}
              <div className="pt-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 mb-6">Certifications & Reports</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col justify-between p-5 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] hover:bg-[#111111] hover:border-zinc-700/80 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-rust)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex flex-col h-full gap-4">
                        <div className="flex items-start justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent-rust)] opacity-80">
                            {cert.type}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="12" y1="18" x2="12" y2="12" />
                              <line x1="9" y1="15" x2="15" y2="15" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-1 mt-auto">
                          <h4 className="text-zinc-200 font-medium group-hover:text-white transition-colors leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-zinc-500">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
