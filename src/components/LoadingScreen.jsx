// src/components/LoadingScreen.jsx
// Beautiful loading screen with Om symbol and Yantra animation
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-beige dark:bg-dark-temple"
                >
                    {/* Background Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(circle at center, rgba(212,160,23,0.1) 0%, transparent 60%)",
                        }}
                    />

                    {/* Rotating Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="relative w-32 h-32"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#D4A017"
                                strokeWidth="1"
                                strokeDasharray="8 4"
                                opacity="0.5"
                            />
                            {/* Mandala petals */}
                            {[...Array(8)].map((_, i) => (
                                <circle
                                    key={i}
                                    cx={50 + Math.cos((i * Math.PI) / 4) * 35}
                                    cy={50 + Math.sin((i * Math.PI) / 4) * 35}
                                    r="6"
                                    fill="none"
                                    stroke="#D4A017"
                                    strokeWidth="0.8"
                                    opacity="0.4"
                                />
                            ))}
                        </svg>
                    </motion.div>

                    {/* Om Symbol (ॐ) - Pulsing */}
                    <motion.div
                        className="absolute"
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <span
                            className="text-5xl font-heading text-gold"
                            style={{
                                textShadow: "0 0 20px rgba(212, 160, 23, 0.5)",
                            }}
                        >
                            ॐ
                        </span>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-12"
                    >
                        <h1 className="text-2xl font-heading font-bold text-dark-temple dark:text-gold">
                            CodeKashi
                        </h1>
                        <motion.div
                            className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Sanskrit Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-4 text-sm text-brown/70 dark:text-beige/60 tracking-wider"
                    >
                        सत्यं शिवं सुंदरं
                    </motion.p>

                    {/* Loading Dots */}
                    <motion.div
                        className="flex gap-1.5 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="w-2 h-2 rounded-full bg-gold"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
