// src/components/Audits.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const audits = [
  {
    name: "PuppyRaffle",
    type: "DeFi / RNG Audit",
    findings: [
      "Critical: Predictable randomness",
      "High: Reentrancy vector",
      "Medium: Logic flow issues",
      "Low: Gas inefficiencies",
    ],
    tags: ["Reentrancy", "Randomness", "Gas"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Puppy-Raffle-Audit-Report.pdf",
  },
  {
    name: "ThunderLoan",
    type: "Flash Loan Audit",
    findings: [
      "Critical: Repay math mismatch",
      "High: Callback exploit surface",
      "Medium: State sync risk",
    ],
    tags: ["Flash Loans", "Math Bugs", "DeFi"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Thunder-Loan-Audit-Report.pdf",
  },
  {
    name: "PasswordStore",
    type: "Access Control Audit",
    findings: [
      "Critical: Unauthorized writes",
      "Medium: Storage shadowing",
      "Low: Missing checks",
    ],
    tags: ["Access Control", "Storage Bugs"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/PasswordStore-Audit-Report.pdf",
  },
  {
    name: "Tswap",
    type: "DEX Logic Audit",
    findings: [
      "High: Pricing formula flaw",
      "Medium: Rounding issues",
      "Low: Gas waste",
    ],
    tags: ["DEX", "Pricing", "DeFi"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/tswap-audit.pdf",
  },
  {
    name: "BossBridge",
    type: "Cross-Chain Bridge Audit",
    findings: [
      "High: Incorrect trust boundary assumptions",
      "Medium: Missing message sanity checks",
      "Low: Weak validation layers",
    ],
    tags: ["Bridge", "Cross-chain", "Validation"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/Boss-Bridge-Audit-Report.pdf",
  },
  {
    name: "VaultGuardians",
    type: "Vault / Funds Safety Audit",
    findings: [
      "High: Access control flaws",
      "Medium: Withdrawal bypass scenario",
      "Low: State sync vulnerability",
    ],
    tags: ["Vault", "Access Control", "Fund Safety"],
    link: "https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports/blob/main/vault-guardians.pdf",
  },
];

export default function Audits() {
  return (
    <section id="audits" className="max-w-6xl mx-auto px-6 py-20 relative">

      {/* Section Title + GitHub icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-heading font-bold text-dark-temple dark:text-gold">
            Security Audits
          </h2>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Ramprasad4121/Smart-Contract-Audit-Reports"
            target="_blank"
            className="text-dark-temple dark:text-gold hover:text-gold/60 transition text-2xl"
            aria-label="GitHub Audits Repo"
          >
            <FiGithub />
          </a>
        </div>

        <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mt-3">
          Publicly documented smart contract audits — covering DeFi, randomness, 
          flash loans, DEX pricing, bridges, and vault security.
        </p>
      </motion.div>

      {/* Audits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {audits.map((audit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md"
          >
            <h3 className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
              {audit.name}
            </h3>

            <p className="mt-1 text-sm text-brown/70 dark:text-beige/70">
              {audit.type}
            </p>

            {/* Findings */}
            <ul className="mt-4 text-sm text-brown/80 dark:text-beige/80 space-y-1">
              {audit.findings.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {audit.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded bg-gold/10 text-dark-temple dark:text-beige border border-gold/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={audit.link}
              target="_blank"
              className="mt-5 inline-flex items-center gap-1 text-sm text-gold hover:text-dark-temple dark:hover:text-gold transition"
            >
              View Full Report <FiArrowUpRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}