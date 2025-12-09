// src/components/ParticleField.jsx
// Diya/Firefly Particle System - warm golden particles floating like lamp flames
import React, { useMemo } from "react";

/**
 * DiYa-inspired particle layer.
 * Creates warm, golden glowing particles that drift upward like oil lamp flames.
 * Evokes the sacred feel of Ganga Aarti at Varanasi.
 */
export default function ParticleField({ count = 30 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Randomized properties for each particle
      const size = 4 + Math.random() * 8; // 4-12px
      const left = Math.random() * 100; // Horizontal position %
      const delay = Math.random() * 8; // Animation delay
      const duration = 10 + Math.random() * 15; // 10-25s rise time
      const horizontalDrift = (Math.random() - 0.5) * 60; // Subtle sway
      const startY = 80 + Math.random() * 40; // Start below viewport
      const opacity = 0.3 + Math.random() * 0.5; // 0.3-0.8

      return {
        id: i,
        size,
        left,
        delay,
        duration,
        horizontalDrift,
        startY,
        opacity,
      };
    });
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="diya-particle"
          style={{
            "--size": `${p.size}px`,
            "--left": `${p.left}%`,
            "--delay": `${p.delay}s`,
            "--duration": `${p.duration}s`,
            "--drift": `${p.horizontalDrift}px`,
            "--start-y": `${p.startY}%`,
            "--opacity": p.opacity,
          }}
        />
      ))}
    </div>
  );
}