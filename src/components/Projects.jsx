// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "ERC-20 Token Framework",
    desc: "Modular, secure ERC-20 architecture implementing industry-standard patterns, extensible roles, upgrade-friendly structure, and gas-efficient mint/burn flows.",
    tech: ["Solidity", "Foundry", "OpenZeppelin"],
    link: "https://github.com/Ramprasad4121/ERC-20-Token",
  },
  {
    title: "DAO Governance Framework",
    desc: "Governance system with proposal creation, voting lifecycle, quorum logic, timelocks, and safe execution flows — inspired by Compound & OpenZeppelin Governor.",
    tech: ["Solidity", "Foundry"],
    link: "https://github.com/Ramprasad4121/dao",
  },
  {
    title: "Merkle Airdrop System",
    desc: "Gas-optimized Merkle proof verification, replay protection, claim tracking, and secure distribution logic for large-scale airdrops.",
    tech: ["Solidity", "Foundry"],
    link: "https://github.com/Ramprasad4121/merkle-airdrop",
  },
  {
    title: "Account Abstraction Modules",
    desc: "Custom UserOperation validation logic, modular signature & session key handlers, and ERC-4337-style account abstraction design.",
    tech: ["Solidity", "Foundry"],
    link: "https://github.com/Ramprasad4121/account-abstraction",
  },
  {
    title: "CCIP Rebase Token",
    desc: "Cross-chain synchronized rebase asset using Chainlink CCIP messaging — ensures supply consistency, oracle integrity, and safe state replication.",
    tech: ["Solidity", "Chainlink CCIP"],
    link: "https://github.com/Ramprasad4121/ccip-rebase-token",
  },
  {
    title: "Upgradeable Contracts (UUPS + Transparent Proxy)",
    desc: "Implementation of upgradeable smart contracts with initializer safety, storage slot preservation, upgrade authorization, and secure UUPS execution flows.",
    tech: ["Solidity", "Foundry", "Proxy Patterns"],
    link: "https://github.com/Ramprasad4121/upgradble-contracts",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 relative">

      {/* Background glow */}
      <div className="absolute -top-16 left-0 w-40 h-40 bg-gold/06 blur-xl rounded-full pointer-events-none"></div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-6"
      >
        Selected Web3 Projects
      </motion.h3>

      <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mx-auto mb-12">
        A collection of engineering work that reflects my focus on smart contract design, protocol architecture, and security-oriented development.
      </p>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md"
          >
            <h4 className="font-heading text-xl font-bold text-dark-temple dark:text-gold">
              {p.title}
            </h4>

            <p className="mt-2 text-brown/80 dark:text-beige/80 text-sm leading-relaxed">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded bg-gold/10 text-dark-temple dark:text-beige border border-gold/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              className="mt-4 inline-flex items-center gap-1 text-sm text-brown/80 dark:text-beige/80 hover:text-gold transition"
            >
              View Project <FiArrowUpRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}