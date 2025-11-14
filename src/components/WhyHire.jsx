// src/components/WhyHireMe.jsx
import React from "react";
import { motion } from "framer-motion";

export default function WhyHireMe() {
  return (
    <section
      id="whyhireme"
      className="max-w-6xl mx-auto px-6 py-20 relative"
    >
      {/* Soft background glow */}
      <div className="absolute -top-20 right-0 w-56 h-56 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-12"
      >
        Why Hire Me?
      </motion.h2>

      <div className="space-y-10 text-brown/80 dark:text-beige/80 leading-relaxed max-w-3xl mx-auto">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            1. I write contracts that survive production.
          </h3>
          <p>
            I focus on readability, predictable state transitions, gas-aware design, 
            and architecture that reduces attack surface. Code that’s easy to maintain — 
            and hard to exploit.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            2. I think like an attacker, build like an engineer.
          </h3>
          <p>
            Studying exploit patterns — reentrancy, oracle drift, callback abuse, 
            repay math mismatch — helps me identify risks before they become vulnerabilities.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            3. I audit with depth — beyond surface-level tooling.
          </h3>
          <p>
            My workflow relies on manual review, invariants, fuzzing, 
            structural reasoning, state-machine correctness, and PoC-level testing. 
            Tools assist me — they don’t replace me.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            4. I build real, production-ready Web3 systems.
          </h3>
          <p>
            DAO governance, Airdrops, Proxies, Account Abstraction, CCIP logic — 
            I understand how to architect robust systems end-to-end. 
            Builders who can audit are rare — and valuable.
          </p>
        </motion.div>

        {/* 5 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            5. I communicate clearly and write clean reports.
          </h3>
          <p>
            I explain vulnerabilities, not just list them — with reasoning, 
            PoCs, and remediation steps that help teams move fast safer.
          </p>
        </motion.div>

        {/* 6 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            6. I treat Web3 like infrastructure, not hype.
          </h3>
          <p>
            I focus on building systems that are reliable, predictable, 
            and resilient — not trend-driven. My priority is protecting real users.
          </p>
        </motion.div>

        {/* 7 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            7. I bring CodeKashi clarity.
          </h3>
          <p>
            Blending analytical reasoning with a calm, disciplined mindset inspired 
            by ancient logic — I approach engineering with precision and humility.
          </p>
        </motion.div>

      </div>
    </section>
  );
}