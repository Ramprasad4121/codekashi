// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Smart Contract Engineering",
    skills: [
      "Solidity (Expert)",
      "EVM Internals",
      "Contract Architecture",
      "Upgradeable Contracts (UUPS / Transparent Proxy)",
      "ERC-20 / ERC-721 Standards",
      "Account Abstraction (ERC-4337)",
      "Merkle Airdrops",
      "Chainlink CCIP",
      "Gas Optimization",
      "Storage Layout Engineering",
    ],
  },
  {
    title: "Security & Auditing",
    skills: [
      "Manual Code Review",
      "Threat Modeling",
      "Reentrancy Mitigation",
      "Oracle Manipulation Defense",
      "Flash-Loan Attack Analysis",
      "Foundry Fuzzing",
      "Invariant Testing",
      "Static Analysis (Slither, Mythril)",
      "Differential Testing",
      "PoC Exploit Construction",
      "Audit Report Writing",
    ],
  },
  {
    title: "Tools & Debugging",
    skills: [
      "Foundry",
      "Hardhat",
      "Slither",
      "Echidna",
      "Tenderly Debugger",
      "Forge Script",
      "Ethers.js",
      "JSON-RPC Debugging",
    ],
  },
  {
    title: "Backend & Web3 Integration",
    skills: [
      "Node.js",
      "API Layer Integration",
      "REST / Minimal GraphQL",
      "Web3 Wallet Flows",
      "Deployment Pipelines",
    ],
  },
  {
    title: "Frontend (DApp UI)",
    skills: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Web3 Integration (Ethers.js)",
      "UI/UX Fundamentals",
    ],
  },
  {
    title: "General Engineering",
    skills: ["Git", "Linux", "CI/CD Basics", "Docker", "Vercel Deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* Soft background glow */}
      <div className="absolute -top-20 right-0 w-56 h-56 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-10"
      >
        Skills & Expertise
      </motion.h3>

      <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mx-auto mb-14">
        A focused blend of smart contract engineering, protocol design, and
        security-first auditing — balanced by disciplined testing and Web3
        development experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md"
          >
            <h4 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-3">
              {sec.title}
            </h4>

            <ul className="space-y-2 text-brown/80 dark:text-beige/80 text-sm">
              {sec.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold">•</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}