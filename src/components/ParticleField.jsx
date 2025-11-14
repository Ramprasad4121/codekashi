// src/components/ParticleField.jsx
import React from "react";

/**
 * Lightweight decorative particle layer.
 * count: number of particles (small, low-cost)
 * The particles are purely decorative (CSS-driven).
 */
export default function ParticleField({ count = 24 }) {
  const nodes = Array.from({ length: count }).map((_, i) => {
    // random properties for CSS variables
    const size = Math.floor(6 + Math.random() * 10); // px
    const left = Math.floor(Math.random() * 100); // %
    const delay = (Math.random() * 8).toFixed(2) + "s";
    const duration = (8 + Math.random() * 12).toFixed(2) + "s";
    const opacity = (0.08 + Math.random() * 0.12).toFixed(2);
    const transformX = (Math.random() * 160 - 80).toFixed(2) + "px";
    const transformY = (Math.random() * 80 - 40).toFixed(2) + "px";

    return (
      <span
        key={i}
        className="particle"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: delay,
          animationDuration: duration,
          opacity,
          transform: `translate(${transformX}, ${transformY})`,
        }}
      />
    );
  });

  return <div className="pointer-events-none relative z-0 w-full h-full">{nodes}</div>;
}