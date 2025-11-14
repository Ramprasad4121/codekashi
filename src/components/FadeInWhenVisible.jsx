// src/components/FadeInWhenVisible.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * A reusable animation wrapper.
 * Wrap ANY section/component with <FadeInWhenVisible> ... </FadeInWhenVisible>
 * and it gets scroll-based fade + upward slide.
 */

export default function FadeInWhenVisible({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}