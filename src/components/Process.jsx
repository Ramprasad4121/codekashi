// src/components/AuditWorkProcess.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Recon & Architecture Mapping",
    desc: "Understanding protocol purpose, trust boundaries, assumptions, external integrations, and system roles. A complete model avoids incorrect conclusions later.",
  },
  {
    num: "2",
    title: "Invariants & Critical Path Definition",
    desc: "Define economic, logical, and state invariants that must always hold. This becomes the compass of the audit and guides all reasoning.",
  },
  {
    num: "3",
    title: "Automated Static Analysis",
    desc: "Use Slither, Mythril, and linters to detect anti-patterns, dead branches, missing checks, and structural issues early.",
  },
  {
    num: "4",
    title: "Manual Code Review",
    desc: "Deep line-by-line review: logic ordering, edge cases, state transitions, access control, failure modes, and math assumptions.",
  },
  {
    num: "5",
    title: "Threat Modeling",
    desc: "Identify adversaries, capabilities, attack surfaces, and manipulation vectors such as reentrancy, oracle drift, MEV, and flash-loan paths.",
  },
  {
    num: "6",
    title: "PoC & Exploit Simulation",
    desc: "Validate suspicious findings using Foundry tests, PoCs, invariant violations, and differential testing. Turn theory into proof.",
  },
  {
    num: "7",
    title: "Gas Profiling & Optimization",
    desc: "Refactor unnecessary storage loads, reduce loop complexity, and adopt gas-efficient patterns without reducing safety.",
  },
  {
    num: "8",
    title: "Fix Recommendations",
    desc: "Provide structured fixes, corrected logic flows, secure patterns, and developer-friendly solutions.",
  },
  {
    num: "9",
    title: "Re-audit & Validation",
    desc: "Re-check all findings after fixes, ensure no regressions, and validate corrected logic thoroughly.",
  },
  {
    num: "10",
    title: "Delivery & Monitoring",
    desc: "Deliver structured reports with severity levels, PoCs, exploit reasoning, and remediation guidelines. Optional monitoring during implementation.",
  },
];

export default function AuditWorkProcess() {
  return (
    <section id="auditprocess" className="max-w-6xl mx-auto px-6 py-20 relative">

      {/* Soft background glow */}
      <div className="absolute -top-16 left-0 w-52 h-52 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-12"
      >
        Audit Work Process
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl font-heading font-bold text-gold">
                {step.num}
              </span>
              <div>
                <h3 className="text-lg font-heading font-semibold text-dark-temple dark:text-gold">
                  {step.title}
                </h3>
                <p className="text-sm mt-2 text-brown/80 dark:text-beige/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}