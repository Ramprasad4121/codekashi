// src/components/PageTransition.jsx
// Smooth page/section transitions with Framer Motion
import React from "react";
import { motion } from "framer-motion";

// Animation variants for page transitions
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
        },
    },
};

// Section transition wrapper
export function SectionTransition({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Page-level transition wrapper (for route changes)
export function PageTransition({ children, className = "" }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child elements
export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item (child of StaggerContainer)
export function StaggerItem({ children, className = "" }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;
