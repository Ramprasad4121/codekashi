// src/components/SanskritShloka.jsx
// Ambient Sanskrit verses that fade in between sections
import React from "react";
import { motion } from "framer-motion";

// Collection of inspiring Sanskrit shlokas with translations
const shlokas = [
    {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        translation: "You have the right to action alone, never to its fruits",
        source: "Bhagavad Gita 2.47",
    },
    {
        sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्",
        translation: "Knowledge gives humility, humility leads to worthiness",
        source: "Subhashita",
    },
    {
        sanskrit: "योगः कर्मसु कौशलम्",
        translation: "Yoga is excellence in action",
        source: "Bhagavad Gita 2.50",
    },
    {
        sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः",
        translation: "Tasks are accomplished by effort, not by wishes",
        source: "Subhashita",
    },
    {
        sanskrit: "धर्मो रक्षति रक्षितः",
        translation: "Dharma protects those who protect it",
        source: "Manusmriti",
    },
];

export default function SanskritShloka({ index = 0, className = "" }) {
    // Cycle through shlokas based on index
    const shloka = shlokas[index % shlokas.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-center py-12 px-6 ${className}`}
        >
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gold/40" />
                <span className="text-gold/60 text-sm">॥</span>
                <span className="w-8 h-[1px] bg-gold/40" />
            </div>

            {/* Sanskrit Text */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl font-heading text-gold/80 dark:text-gold/70 mb-3 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {shloka.sanskrit}
            </motion.p>

            {/* Translation */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base text-brown/60 dark:text-beige/50 italic max-w-xl mx-auto"
            >
                "{shloka.translation}"
            </motion.p>

            {/* Source */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs text-brown/40 dark:text-beige/30 mt-2"
            >
                — {shloka.source}
            </motion.p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <span className="w-8 h-[1px] bg-gold/40" />
                <span className="text-gold/60 text-sm">॥</span>
                <span className="w-8 h-[1px] bg-gold/40" />
            </div>
        </motion.div>
    );
}
