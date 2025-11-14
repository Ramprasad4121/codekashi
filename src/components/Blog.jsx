// src/components/Writeups.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const posts = [
  {
    title: "How Mutation Testing Could Have Prevented the Penpie Reentrancy Attack",
    desc: "How mutation testing and invariant-based security could have exposed the missed checks that enabled the Penpie reentrancy exploit.",
    tags: ["Reentrancy", "Mutation Testing", "Security"],
    readTime: "6 min",
    link: "https://medium.com/@0xramprasad/how-mutation-testing-could-have-prevented-the-penpie-reentrancy-attack-14899b608a46",
  },
  {
    title: "How Governance Vulnerabilities Enabled the AquaDAO Exploit",
    desc: "Analysis of governance-level vulnerabilities—weak permissions, poor proposal validation, and logic flaws that culminated in the AquaDAO attack.",
    tags: ["Governance", "DAO Security", "Exploit Analysis"],
    readTime: "7 min",
    link: "https://medium.com/@0xramprasad/how-governance-vulnerabilities-enabled-the-aquadao-exploit-aa2857e507c3",
  },
  {
    title: "Unchecked External Calls & the Polter Finance Hack",
    desc: "A breakdown of how unguarded external calls introduced critical attack vectors in Polter Finance, with safer call patterns explained.",
    tags: ["External Calls", "DeFi Security", "Reentrancy"],
    readTime: "5 min",
    link: "https://medium.com/@0xramprasad/unchecked-external-calls-and-the-polter-finance-hack-904e3dcb6adb",
  },
  {
    title: "Ethereum vs Solana: The Battle of Layer-1 Giants",
    desc: "A clear, technical comparison of Ethereum versus Solana covering architecture, consensus, performance, and security trade-offs.",
    tags: ["Blockchain", "Layer-1", "Research"],
    readTime: "8 min",
    link: "https://medium.com/@0xramprasad/ethereum-vs-solana-the-battle-of-layer-1-giants-7e22d54f6acf",
  },
];

export default function Writeups() {
  return (
    <section id="writeups" className="max-w-6xl mx-auto px-6 py-20 relative">
      
      {/* Soft background glow */}
      <div className="absolute -top-16 left-0 w-48 h-48 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-12"
      >
        Security Write-ups & Notes
      </motion.h2>

      <p className="text-center text-brown/80 dark:text-beige/70 max-w-2xl mx-auto mb-14">
        Practical articles explaining key vulnerabilities, exploit patterns, and lessons learned from real-world security incidents.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-md hover:-translate-y-1 transition"
          >
            <h4 className="font-heading text-xl font-bold text-dark-temple dark:text-gold mb-2">
              {p.title}
            </h4>

            <p className="text-sm text-brown/80 dark:text-beige/80 mb-4 leading-relaxed">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded bg-gold/10 text-dark-temple dark:text-beige border border-gold/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-brown/80 dark:text-beige/80">
              <span>{p.readTime}</span>
              
              <a
                href={p.link}
                target="_blank"
                className="flex items-center gap-1 hover:text-gold transition"
              >
                Read <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}