// src/components/Footer.jsx
import React from "react";
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";
import yantra from "../assets/gayatri-yantra.svg";

export default function Footer() {
  return (
    <footer
      className="
        relative 
        mt-24 
        py-14 
        px-6 
        bg-beige 
        dark:bg-dark-temple 
        border-t 
        border-gold/20 
        overflow-hidden
      "
      style={{ backgroundColor: "var(--color-dark-temple)" }}
    >
      {/* Subtle, non-intrusive yantra watermark */}
      <img
        src={yantra}
        alt="yantra watermark"
        className="
          absolute 
          bottom-0 
          right-0 
          w-[260px] 
          h-[260px] 
          opacity-[0.035] 
          blur-[1px] 
          pointer-events-none 
          select-none 
          object-contain
          animate-spin-slow
        "
        style={{
          transform: "translate(25%, 25%)",
        }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Brand */}
        <h3 className="text-2xl font-heading font-bold text-dark-temple dark:text-gold">
          CodeKashi
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm text-brown/70 dark:text-beige/70">
          Ancient clarity meets modern smart contract engineering.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:ramprasadgoud34@gmail.com"
            className="text-xl text-brown/80 dark:text-beige/80 hover:text-gold transition"
            aria-label="Email"
          >
            <FiMail />
          </a>

          <a
            href="https://x.com/0xramprasad"
            target="_blank"
            className="text-xl text-brown/80 dark:text-beige/80 hover:text-gold transition"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>

          <a
            href="https://github.com/Ramprasad4121"
            target="_blank"
            className="text-xl text-brown/80 dark:text-beige/80 hover:text-gold transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 mb-4 w-24 h-[1px] bg-gold/40" />

        {/* Copyright */}
        <p className="text-xs text-brown/70 dark:text-beige/60">
          © {new Date().getFullYear()} Ramprasad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}