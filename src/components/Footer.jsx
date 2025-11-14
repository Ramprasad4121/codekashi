// src/components/Footer.jsx
import React from "react";
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";
import yantra from "../assets/gayatri-yantra.svg";

export default function Footer() {
  return (
    <footer className="relative mt-20 py-12 px-6 bg-beige dark:bg-dark-temple border-t border-gold/20 overflow-hidden">
      
      {/* FIXED: Subtle yantra watermark that WON’T push layout */}
      <img
        src={yantra}
        alt="yantra"
        className="
          absolute 
          bottom-0 right-[-40px]
          w-[320px] h-[320px] 
          opacity-[0.05] 
          blur-[1px] 
          pointer-events-none 
          select-none 
          object-contain 
        "
        style={{
          transform: "translateY(20%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        <h3 className="text-2xl font-heading font-bold text-dark-temple dark:text-gold">
          CodeKashi
        </h3>

        <p className="mt-2 text-sm text-brown/70 dark:text-beige/70">
          Ancient clarity meets modern smart contract engineering.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-5">
          <a
            href="mailto:ramprasadgoud34@gmail.com"
            className="text-brown/80 dark:text-beige/80 hover:text-gold transition text-xl"
          >
            <FiMail />
          </a>

          <a
            href="https://x.com/0xramprasad"
            target="_blank"
            className="text-brown/80 dark:text-beige/80 hover:text-gold transition text-xl"
          >
            <FiTwitter />
          </a>

          <a
            href="https://github.com/Ramprasad4121"
            target="_blank"
            className="text-brown/80 dark:text-beige/80 hover:text-gold transition text-xl"
          >
            <FiGithub />
          </a>
        </div>

        <div className="mx-auto mt-6 mb-4 w-24 h-[1px] bg-gold/40"></div>

        <p className="text-xs text-brown/70 dark:text-beige/60">
          © {new Date().getFullYear()} Ramprasad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}