// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "Ram thinks like both an attacker and a builder. His audit notes were clear, structured, and extremely impactful.",
    name: "Senior Web3 Engineer",
    role: "DeFi Startup (Confidential)",
  },
  {
    quote:
      "He caught issues others missed. The gas optimizations alone saved us thousands in fees over time.",
    name: "Protocol Founder",
    role: "On-chain Raffle Project",
  },
  {
    quote:
      "One of the most disciplined and detail-oriented junior auditors I’ve worked with. Highly recommended.",
    name: "Blockchain Security Lead",
    role: "Independent Auditor",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* subtle mandala glow */}
      <div className="absolute -top-20 left-0 w-48 h-48 bg-gold opacity-[0.06] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-64 h-64 bg-gold opacity-[0.05] blur-3xl rounded-full pointer-events-none" />

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-10"
      >
        Testimonials
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/80 dark:bg-dark-temple/70 border border-gold/20 shadow-md relative overflow-hidden"
          >
            {/* accent glow */}
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gold/15 blur-2xl rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-2 text-gold mb-3">
              <FiMessageCircle className="text-xl" />
              <span className="font-heading font-semibold">Feedback</span>
            </div>

            <p className="text-brown/90 dark:text-beige/90 text-sm leading-relaxed italic">
              “{t.quote}”
            </p>

            <div className="mt-4">
              <div className="font-semibold text-dark-temple dark:text-gold">
                {t.name}
              </div>
              <div className="text-xs text-brown/70 dark:text-beige/70">
                {t.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}