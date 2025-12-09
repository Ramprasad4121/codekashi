// src/components/ScrollProgress.jsx
// Gold progress bar showing scroll position
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #D4A017 0%, #fce8b0 50%, #D4A017 100%)",
                boxShadow: "0 0 10px rgba(212, 160, 23, 0.5)",
            }}
        />
    );
}
