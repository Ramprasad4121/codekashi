// src/components/FloatingHireButton.jsx
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function FloatingHireButton() {
  return (
    <a
      href="#contact"
      className="
        fixed 
        bottom-6 right-6 
        z-[99]
        bg-gold 
        text-dark-temple 
        px-5 py-3 
        rounded-full 
        font-semibold 
        shadow-lg 
        flex items-center gap-2
        hover:brightness-110 
        active:scale-95
        transition-all
        dark:bg-gold dark:text-dark-temple
      "
      aria-label="Hire Me"
    >
      Hire Me <FiArrowUpRight />
    </a>
  );
}