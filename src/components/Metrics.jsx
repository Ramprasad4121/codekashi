// src/components/Metrics.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import useCountUp from "../hooks/useCountUp";

// Helper component for animated metric values
function AnimatedMetricValue({ value, inView }) {
  // Parse the numeric part and suffix (e.g., "300+" -> 300 and "+")
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    // Non-numeric value (like "Critical"), just show as-is
    return <span>{value}</span>;
  }

  const numericValue = parseInt(match[1], 10);
  const suffix = match[2] || "";

  const animatedCount = useCountUp(numericValue, 2000, inView);

  return (
    <span>
      {animatedCount}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    value: "300+",
    label: "Hours of Smart Contract Engineering",
    desc: "Deep work across DAO, airdrop, proxy, AA, and cross-chain systems.",
  },
  {
    value: "200+",
    label: "Hours of Auditing Experience",
    desc: "Manual reviews, fuzzing, invariants, and exploit simulations.",
  },
  {
    value: "500+",
    label: "Bugs Studied",
    desc: "Historical vulnerabilities, exploit patterns, and failure mode analysis.",
  },
  {
    value: "9+",
    label: "Smart Contracts Audited",
    desc: "DeFi, swaps, governance, lending, VRF-style randomness.",
  },
  {
    value: "Critical",
    label: "High-Severity Issues Prevented",
    desc: "Reentrancy, oracle drift, repay mismatches, unsafe callbacks.",
  },
  {
    value: "40%+",
    label: "Gas Savings Achieved",
    desc: "Refactoring loops, storage ops, and execution paths.",
  },
  {
    value: "🥈 2nd",
    label: "DeNova Hackathon Winner",
    desc: "Placed 2nd in DeNova hackathon — building innovative Web3 solutions.",
    link: "https://x.com/decentra_cloud/status/2008902413156270335",
  },
];

export default function Metrics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="metrics" className="max-w-6xl mx-auto px-6 py-20 relative" ref={sectionRef}>
      {/* Soft background glow */}
      <div className="absolute -top-16 right-0 w-40 h-40 bg-gold/10 blur-xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-10"
      >
        Metrics & Achievements
      </motion.h2>

      <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mx-auto mb-14">
        Data that reflects disciplined engineering and security-focused development.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {metrics.map((m, i) => {
          const CardContent = (
            <>
              <h3 className="text-3xl font-heading font-bold text-gold mb-2">
                <AnimatedMetricValue value={m.value} inView={isInView} />
              </h3>
              <h4 className="text-lg font-heading font-semibold text-dark-temple dark:text-gold mb-1">
                {m.label}
                {m.link && <FiExternalLink className="inline ml-2 text-base" />}
              </h4>
              <p className="text-sm text-brown/80 dark:text-beige/80 leading-relaxed">
                {m.desc}
              </p>
            </>
          );

          return m.link ? (
            <motion.a
              key={i}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="block p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md hover:shadow-lg hover:border-gold/40 transition-all duration-300 cursor-pointer"
            >
              {CardContent}
            </motion.a>
          ) : (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md hover:shadow-lg hover:border-gold/40 transition-all duration-300"
            >
              {CardContent}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}