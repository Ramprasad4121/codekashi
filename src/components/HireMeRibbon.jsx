// src/components/CallToAction.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center relative">

      {/* soft background glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-dark-temple dark:text-gold"
      >
        Need a Smart Contract Auditor or Security Engineer?
      </motion.h2>

      {/* subtle divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto my-4 w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-brown/80 dark:text-beige/80 max-w-xl mx-auto text-base mb-8"
      >
        I specialize in securing DeFi protocols, optimizing gas usage, 
        and designing predictable, attack-resistant Solidity systems.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-dark-temple font-semibold hover:brightness-110 transition shadow-md"
      >
        Start a Conversation <FiArrowUpRight />
      </motion.a>

    </section>
  );
}