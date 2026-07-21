'use client';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function BookAudit() {
  const [state, handleSubmit] = useForm('mvzeqoew');

  return (
    <section id="book-audit" className="py-20 md:py-24 px-6 bg-[#000000] text-zinc-400 font-sans border-t border-zinc-900/50">
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
                Book an Audit
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-zinc-900/50" />
          </div>

          <div className="relative p-6 sm:p-8 rounded-xl border border-zinc-800/60 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-rust)]/5 to-transparent opacity-100 pointer-events-none" />

            {state.succeeded ? (
              <div className="relative z-10 py-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full border border-[var(--accent-rust)] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-rust)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl text-white font-medium mb-2">Request Received</h3>
                <p className="text-zinc-400">I'll review the details and get back to you within 24.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Name
                    </label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-md px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--accent-rust)] transition-colors"
                      placeholder="Your name"
                    />
                    <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Email
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-md px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--accent-rust)] transition-colors"
                      placeholder="Email address"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="project" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Project / Protocol Name
                  </label>
                  <input 
                    id="project" 
                    type="text" 
                    name="project" 
                    required 
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-md px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--accent-rust)] transition-colors"
                    placeholder="E.g. XYZ Protocol"
                  />
                  <ValidationError field="project" prefix="Project" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Scope, chain (EVM/Solana), timeline
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-md px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-[var(--accent-rust)] transition-colors resize-y"
                    placeholder="Please provide details about the audit scope, target blockchain, and preferred timeline..."
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <div className="mt-2 flex justify-start">
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-zinc-800/80 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all text-sm font-mono uppercase tracking-[0.1em] text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{state.submitting ? 'Sending...' : 'Send Request'}</span>
                    <span className="text-zinc-600 group-hover:text-white transition-colors">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
