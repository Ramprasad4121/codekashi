'use client'

import { motion } from 'framer-motion'

const socials = [
  { label: 'Twitter', handle: '@0xramprasad', href: 'https://twitter.com/0xramprasad' },
  { label: 'GitHub', handle: 'Ramprasad4121', href: 'https://github.com/Ramprasad4121' },
  { label: 'Email', handle: 'ramprasadgoud34@gmail.com', href: 'mailto:ramprasadgoud34@gmail.com' },
]

export default function Connect() {
  return (
    <section id="connect" className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
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
                 Connect
               </h2>
             </div>
             <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-2">
                  {social.label}
                </span>
                <span className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors relative inline-block w-fit">
                  {social.handle}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
