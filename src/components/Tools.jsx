// src/components/Tools.jsx
import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Foundry", desc: "Primary dev, testing & fuzzing framework." },
  { name: "Hardhat", desc: "Ecosystem tooling & plugin support." },
  { name: "Slither", desc: "Static analysis for vulnerability detection." },
  { name: "Echidna", desc: "Property-based fuzzing for invariants." },
  { name: "Tenderly", desc: "Advanced debugging, tracing & simulation." },
  { name: "Mythril", desc: "Symbolic execution for deeper analysis." },
  { name: "OpenZeppelin", desc: "Secure contract libraries & patterns." },
  { name: "Ethers.js", desc: "Web3 scripting & contract interaction." },
  { name: "Chainlink", desc: "Cross-chain (CCIP) & oracle integrations." },
  { name: "VSCode", desc: "Daily development environment." },
  { name: "Git", desc: "Version control & collaboration." },
  { name: "Linux", desc: "Stable engineering environment." },
];

export default function Tools() {
  return (
    <section id="tools" className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background glow */}
      <div className="absolute -top-16 left-0 w-48 h-48 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-10"
      >
        Tools I Use Daily
      </motion.h2>

      <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mx-auto mb-12">
        A toolkit crafted for smart contract development, auditing, debugging, and secure Web3 engineering.
      </p>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="p-5 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-sm"
          >
            <h3 className="text-lg font-heading font-semibold text-dark-temple dark:text-gold">
              {tool.name}
            </h3>
            <p className="mt-1 text-sm text-brown/80 dark:text-beige/80">
              {tool.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}