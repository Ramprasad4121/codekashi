'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const employers = [
    {
      company: 'Independent Protocol Audits',
      url: '#',
      role: '7 Smart Contracts Audited'
    },
    {
      company: 'BNB Chain',
      url: 'https://bnbchain.org',
      role: '$25K Tooling Grant Winner'
    },
    {
      company: 'RektOff × Solana Foundation',
      url: '#',
      role: 'Security Bootcamp Graduate'
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
                Smart Contract Security Researcher / Rust Systems Engineer
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg leading-[1.8] text-zinc-400">
                <p>
                  I work on <span className="text-zinc-200">smart contract security</span> and <span className="text-zinc-200">Rust systems engineering</span>.
                  Before that, I built my foundation through seven independent protocol audits, 
                  the RektOff × Solana Foundation security bootcamp, and a $25K BNB Chain grant 
                  for tooling that didn't exist yet.
                </p>
                <p>
                  I got into this through low-level systems programming and a stubborn interest 
                  in how things break. I still care most about building tools that make 
                  complex protocols harder to exploit. When I'm not auditing contracts, 
                  I'm writing about what I found.
                </p>
              </div>
            </motion.div>

            {/* Experience / Employers list mimicking vitto.cc */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6">
                Experience & Grants
              </h3>
              
              <div className="flex flex-col space-y-4">
                {employers.map((emp, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                        {emp.company}
                      </span>
                      {emp.url !== '#' && (
                        <a 
                          href={emp.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          {emp.url.replace('https://', '')}
                        </a>
                      )}
                    </div>
                    <span className="text-sm text-zinc-500 mt-1 sm:mt-0 font-mono text-left sm:text-right">
                      {emp.role}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
