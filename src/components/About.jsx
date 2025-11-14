// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20 relative"
    >
      {/* Soft Glow */}
      <div className="absolute -top-20 left-0 w-52 h-52 bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-10"
      >
        About — The Sage Engineer
      </motion.h2>

      <div className="space-y-14 text-brown/90 dark:text-beige/80 leading-relaxed">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            Who I Am
          </h3>
          <p>
            I’m <span className="font-semibold">Ramprasad</span>, a Smart Contract Engineer &
            Blockchain Security Researcher who approaches Web3 systems with both
            analytical precision and ancient clarity. To me, smart contracts are
            digital artifacts — designed with intention, inspected with
            discipline, and preserved with respect.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            Experience
          </h3>
          <p>
            I’ve audited and engineered multiple DeFi protocols, uncovering logic
            flaws, securing edge-cases, and implementing fixes that strengthened
            protocol safety. My focus is on finding what others miss — reentrancy
            surfaces, oracle drift windows, unsafe callbacks, underflow edges,
            and gas-inefficient patterns.
          </p>
        </motion.div>

        {/* Background */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            Background
          </h3>
          <p>
            I’m a Computer Science student with hands-on experience in ML,
            security, and smart contract architecture. My ML background helps me
            recognize <span className="font-semibold">patterns, anomalies, and
            invariants</span> in contract flows — giving me an advantage in
            threat modeling and exploit reproduction.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3 className="text-xl font-heading font-semibold text-dark-temple dark:text-gold mb-2">
            Philosophy
          </h3>
          <p>
            I build and audit with humility and clarity. Every exploit in history
            is a lesson; every fix is a responsibility. My goal is to design 
            smart contracts that are readable, testable, predictable, and 
            resilient — systems that guard user value and stand the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}