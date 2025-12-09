// src/components/LotusBackToTop.jsx
// Back-to-top button with lotus bloom animation
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LotusBackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-beige dark:bg-dark-temple border-2 border-gold shadow-lg flex items-center justify-center transition-shadow hover:shadow-gold/30 hover:shadow-xl"
                    aria-label="Scroll to top"
                    style={{
                        boxShadow: isHovered ? "0 0 25px rgba(212, 160, 23, 0.4)" : "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                >
                    {/* Lotus SVG with bloom animation */}
                    <svg
                        viewBox="0 0 40 40"
                        className="w-8 h-8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Center petal (always visible) */}
                        <motion.ellipse
                            cx="20"
                            cy="18"
                            rx="4"
                            ry="10"
                            fill="#D4A017"
                            initial={{ scaleY: 0.8 }}
                            animate={{ scaleY: isHovered ? 1 : 0.85 }}
                            transition={{ duration: 0.3 }}
                            style={{ originY: 1 }}
                        />

                        {/* Left petals */}
                        <motion.ellipse
                            cx="14"
                            cy="20"
                            rx="3.5"
                            ry="8"
                            fill="#D4A017"
                            opacity={0.85}
                            initial={{ rotate: 25, scaleY: 0.6 }}
                            animate={{
                                rotate: isHovered ? 35 : 25,
                                scaleY: isHovered ? 0.9 : 0.65,
                                opacity: isHovered ? 1 : 0.7
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{ originX: 0.5, originY: 1 }}
                        />
                        <motion.ellipse
                            cx="9"
                            cy="23"
                            rx="3"
                            ry="6"
                            fill="#D4A017"
                            opacity={0.6}
                            initial={{ rotate: 50, scale: 0.5 }}
                            animate={{
                                rotate: isHovered ? 55 : 50,
                                scale: isHovered ? 0.8 : 0.5,
                                opacity: isHovered ? 0.9 : 0.5
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ originX: 0.5, originY: 1 }}
                        />

                        {/* Right petals */}
                        <motion.ellipse
                            cx="26"
                            cy="20"
                            rx="3.5"
                            ry="8"
                            fill="#D4A017"
                            opacity={0.85}
                            initial={{ rotate: -25, scaleY: 0.6 }}
                            animate={{
                                rotate: isHovered ? -35 : -25,
                                scaleY: isHovered ? 0.9 : 0.65,
                                opacity: isHovered ? 1 : 0.7
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{ originX: 0.5, originY: 1 }}
                        />
                        <motion.ellipse
                            cx="31"
                            cy="23"
                            rx="3"
                            ry="6"
                            fill="#D4A017"
                            opacity={0.6}
                            initial={{ rotate: -50, scale: 0.5 }}
                            animate={{
                                rotate: isHovered ? -55 : -50,
                                scale: isHovered ? 0.8 : 0.5,
                                opacity: isHovered ? 0.9 : 0.5
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ originX: 0.5, originY: 1 }}
                        />

                        {/* Center dot */}
                        <circle cx="20" cy="28" r="2" fill="#8B4513" opacity="0.7" />

                        {/* Arrow indicator */}
                        <motion.path
                            d="M17 14 L20 10 L23 14"
                            stroke="#1A1005"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            animate={{ y: isHovered ? -2 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
