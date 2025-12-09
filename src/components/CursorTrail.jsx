// src/components/CursorTrail.jsx
// Golden spark particles following the cursor
import React, { useEffect, useRef, useState } from "react";

const PARTICLE_COUNT = 15;
const PARTICLE_LIFETIME = 800; // ms

export default function CursorTrail() {
    const [particles, setParticles] = useState([]);
    const particleIdRef = useRef(0);
    const lastPosRef = useRef({ x: 0, y: 0 });
    const throttleRef = useRef(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Throttle particle creation
            if (throttleRef.current) return;
            throttleRef.current = true;
            setTimeout(() => { throttleRef.current = false; }, 50);

            const { clientX: x, clientY: y } = e;

            // Only create particles if mouse moved enough
            const dx = x - lastPosRef.current.x;
            const dy = y - lastPosRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 10) return;

            lastPosRef.current = { x, y };

            const newParticle = {
                id: particleIdRef.current++,
                x,
                y,
                size: 4 + Math.random() * 6,
                createdAt: Date.now(),
            };

            setParticles((prev) => {
                const filtered = prev.filter(
                    (p) => Date.now() - p.createdAt < PARTICLE_LIFETIME
                );
                return [...filtered.slice(-PARTICLE_COUNT), newParticle];
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Cleanup old particles
    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) =>
                prev.filter((p) => Date.now() - p.createdAt < PARTICLE_LIFETIME)
            );
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {particles.map((particle) => {
                const age = Date.now() - particle.createdAt;
                const progress = age / PARTICLE_LIFETIME;
                const opacity = 1 - progress;
                const scale = 1 - progress * 0.5;

                return (
                    <div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            opacity: opacity * 0.7,
                            background: `radial-gradient(circle, rgba(255, 215, 100, 0.9) 0%, rgba(212, 160, 23, 0.6) 50%, transparent 100%)`,
                            boxShadow: `0 0 ${particle.size * 2}px rgba(212, 160, 23, 0.5)`,
                            transition: "opacity 0.1s ease-out",
                        }}
                    />
                );
            })}
        </div>
    );
}
