'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'CHI',
    role: 'ML Intern',
    duration: '8 weeks',
    description:
      'Built a Python/Flask backend serving YOLOv8 and ResNet101 models for non-invasive health screening from nail, palm, and eye images. Focused on anemia detection through image classification, deployed as two separate services (anemia-ai-backend, anemia-nail-detection).',
    certificate: '/chi-certificate.jpg'
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
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
                Experience
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-5 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] hover:border-zinc-700/80 hover:bg-[#111111] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-rust)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full gap-4">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                        {exp.company}
                      </span>
                      <span className="text-zinc-700">—</span>
                      <span className="font-mono text-sm text-[var(--accent-rust)]">
                        {exp.role}
                      </span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-600">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-[1.8] text-zinc-400 text-justify">
                    {exp.description}
                  </p>

                  {/* Certificate Link */}
                  {exp.certificate && (
                    <div className="mt-2">
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800/80 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all text-xs font-mono uppercase tracking-[0.1em] text-zinc-500"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="12" y1="18" x2="12" y2="12" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
