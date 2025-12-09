// src/components/Timeline.jsx
// Interactive journey timeline with milestones
import React from "react";
import { motion } from "framer-motion";

const milestones = [
    {
        year: "2022",
        title: "Discovered Blockchain",
        description: "First exposure to Ethereum and smart contracts. Fascinated by decentralized systems and cryptographic security.",
        icon: "🔗",
    },
    {
        year: "2023",
        title: "Learned Solidity",
        description: "Deep dive into Solidity, EVM internals, and smart contract development. Built first DeFi protocols.",
        icon: "📚",
    },
    {
        year: "2023",
        title: "Started Security Research",
        description: "Began studying historical exploits, reentrancy patterns, and oracle manipulation attacks.",
        icon: "🔍",
    },
    {
        year: "2024",
        title: "First Audit Competition",
        description: "Participated in competitive audits on Code4rena and Sherlock. Found first high-severity vulnerability.",
        icon: "🏆",
    },
    {
        year: "2024",
        title: "Professional Auditor",
        description: "Completed multiple protocol audits. Specializing in DeFi, lending protocols, and cross-chain systems.",
        icon: "🛡️",
    },
    {
        year: "Present",
        title: "CodeKashi",
        description: "Building secure smart contracts and conducting thorough security audits. Ancient clarity meets modern engineering.",
        icon: "🕉️",
    },
];

export default function Timeline() {
    return (
        <section id="journey" className="max-w-4xl mx-auto px-6 py-20 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-4"
            >
                My Journey
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center text-brown/70 dark:text-beige/60 mb-16 max-w-xl mx-auto"
            >
                From curiosity to expertise — the path that led me here
            </motion.p>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 -translate-x-1/2" />

                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            }`}
                    >
                        {/* Content card */}
                        <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                            <div className="inline-block p-5 rounded-xl bg-white/80 dark:bg-dark-temple/80 border border-gold/20 shadow-md hover:shadow-lg hover:border-gold/40 transition-all duration-300">
                                <span className="text-2xl mb-2 block">{milestone.icon}</span>
                                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                                    {milestone.year}
                                </span>
                                <h3 className="text-lg font-heading font-bold text-dark-temple dark:text-gold mt-1 mb-2">
                                    {milestone.title}
                                </h3>
                                <p className="text-sm text-brown/70 dark:text-beige/70 leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-beige dark:border-dark-temple shadow-md z-10" />

                        {/* Empty space for opposite side */}
                        <div className="w-5/12" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
