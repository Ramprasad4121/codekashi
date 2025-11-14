// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import yantra from "../assets/gayatri-yantra.svg";
import ParticleField from "./ParticleField";

export default function Hero() {
  const heroRef = useRef(null);
  const yantraRef = useRef(null);
  const auraRef = useRef(null);

  // Very subtle parallax
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const tx = x * 4; // subtle movement
      const ty = y * 3;

      if (yantraRef.current) {
        yantraRef.current.style.transform = 
          `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = 
          `translate(calc(-50% + ${tx/2}px), calc(-50% + ${ty/2}px))`;
      }
    }

    function onLeave() {
      if (yantraRef.current) {
        yantraRef.current.style.transform = "translate(-50%, -50%)";
      }
      if (auraRef.current) {
        auraRef.current.style.transform = "translate(-50%, -50%)";
      }
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center overflow-hidden"
    >
      {/* Particle Layer (very subtle) */}
      <ParticleField count={22} />

      {/* SUBTLE YANTRA BACKGROUND */}
      <motion.div
        ref={yantraRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "520px",
          height: "520px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={yantra}
          alt="yantra"
          className="w-full h-full object-contain blur-[1px]"
        />
      </motion.div>

      {/* SOFT GOLD AURA */}
      <div
        ref={auraRef}
        className="absolute top-1/2 left-1/2 pointer-events-none rounded-full"
        style={{
          width: "540px",
          height: "540px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(212,160,23,0.06) 0%, rgba(212,160,23,0.02) 40%, transparent 70%)",
        }}
      />

      {/* SANSKRIT ACCENT */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-gold font-semibold tracking-wide text-sm md:text-base mb-4 z-10 relative"
      >
        ✦ सत्यं शिवं सुंदरं ✦
      </motion.p>

      {/* MAIN HEADING */}
     <motion.h1
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, delay: 0.12 }}
  className="text-5xl md:text-6xl font-heading font-extrabold text-dark-temple dark:text-gold leading-tight relative z-10"
>
  Ramprasad
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, delay: 0.2 }}
  className="mt-3 text-xl md:text-2xl font-heading text-dark-temple dark:text-gold/90 tracking-wide relative z-10"
>
  Smart Contract Engineer · Solidity Developer · Security Researcher
</motion.h2>

      {/* DIVIDER */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mx-auto mt-6 mb-6 w-28 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent relative z-10"
      />

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-brown/80 dark:text-beige/70 max-w-2xl mx-auto leading-relaxed relative z-10"
      >
        I restore and fortify smart contracts like ancient artifacts — uncovering vulnerabilities,
        applying precise engineering fixes, and preserving value across Web3 ecosystems.
      </motion.p>

      {/* TECH BADGES */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mt-8 relative z-10"
      >
        {["Solidity", "Smart Contracts", "Security Audits", "DeFi", "EVM Internals"].map((b, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-dark-temple dark:text-beige text-sm font-medium backdrop-blur-sm"
          >
            {b}
          </span>
        ))}
      </motion.div>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="mt-10 flex flex-wrap justify-center gap-4 z-10 relative"
      >
        <a
          href="#audits"
          className="px-6 py-3 rounded-full bg-gold text-dark-temple font-semibold hover:brightness-110 transition shadow-md"
        >
          View My Audits
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}