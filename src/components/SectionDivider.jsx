// src/components/SectionDivider.jsx
import React from "react";

export default function SectionDivider() {
  return (
    <div className="relative my-20 flex justify-center items-center">
      {/* gold line */}
      <div className="w-full max-w-3xl h-px bg-gold/40"></div>

      {/* mandala dot center */}
      <div className="absolute w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-gold/70"></div>
      </div>
    </div>
  );
}