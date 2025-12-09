// src/components/FeaturedIn.jsx
// Logo showcase strip with scrolling marquee
import React from "react";
import { motion } from "framer-motion";

// Platform logos represented as text badges (can be replaced with actual SVG logos)
const platforms = [
    { name: "Code4rena", color: "#22C55E" },
    { name: "Sherlock", color: "#8B5CF6" },
    { name: "Immunefi", color: "#3B82F6" },
    { name: "Cyfrin", color: "#F59E0B" },
    { name: "Secureum", color: "#EC4899" },
    { name: "OpenZeppelin", color: "#4F46E5" },
    { name: "Foundry", color: "#EF4444" },
    { name: "Hardhat", color: "#FCD34D" },
];

// Duplicate for seamless loop
const allPlatforms = [...platforms, ...platforms];

export default function FeaturedIn() {
    return (
        <section className="py-16 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <p className="text-sm uppercase tracking-widest text-gold/70 font-semibold mb-2">
                    Tools & Platforms
                </p>
                <h3 className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
                    Experienced With
                </h3>
            </motion.div>

            {/* Scrolling Marquee */}
            <div className="relative">
                <motion.div
                    animate={{ x: [0, -50 * platforms.length] }}
                    transition={{
                        x: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 items-center"
                >
                    {allPlatforms.map((platform, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-8 py-4 rounded-xl bg-white/50 dark:bg-dark-temple/50 border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3">
                                {/* Colored dot */}
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: platform.color }}
                                />
                                {/* Platform name */}
                                <span className="text-lg font-heading font-semibold text-dark-temple dark:text-beige group-hover:text-gold transition-colors">
                                    {platform.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-beige dark:from-dark-temple to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-beige dark:from-dark-temple to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
