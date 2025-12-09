// src/components/BlogPost.jsx
// MDX-ready blog post component with styling
import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowLeft, FiTag } from "react-icons/fi";

// Code block component with styling (for MDX use)
export function CodeBlock({ children, language = "javascript" }) {
    return (
        <pre className="my-4 p-4 rounded-xl bg-[#1a1a2e] border border-gold/10 overflow-x-auto">
            <code className="text-sm text-beige/90 font-mono">{children}</code>
        </pre>
    );
}

// Callout/alert component for MDX
export function Callout({ type = "info", title, children }) {
    const styles = {
        info: "bg-blue-500/10 border-blue-500/30 text-blue-400",
        warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
        danger: "bg-red-500/10 border-red-500/30 text-red-400",
        success: "bg-green-500/10 border-green-500/30 text-green-400",
    };

    const icons = {
        info: "💡",
        warning: "⚠️",
        danger: "🚨",
        success: "✅",
    };

    return (
        <div className={`my-4 p-4 rounded-xl border ${styles[type]}`}>
            <div className="flex items-center gap-2 font-semibold mb-2">
                <span>{icons[type]}</span>
                <span>{title}</span>
            </div>
            <div className="text-sm opacity-90">{children}</div>
        </div>
    );
}

// Main BlogPost component
export default function BlogPost({
    title,
    date,
    readTime,
    tags = [],
    children,
    onBack,
}) {
    return (
        <article className="max-w-3xl mx-auto px-6 py-12">
            {/* Back button */}
            {onBack && (
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="flex items-center gap-2 text-gold hover:text-gold/80 transition mb-8"
                >
                    <FiArrowLeft /> Back to Blog
                </motion.button>
            )}

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark-temple dark:text-gold mb-4 leading-tight">
                    {title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-brown/60 dark:text-beige/50">
                    {date && (
                        <span className="flex items-center gap-1.5">
                            <FiCalendar className="text-gold" />
                            {date}
                        </span>
                    )}
                    {readTime && (
                        <span className="flex items-center gap-1.5">
                            <FiClock className="text-gold" />
                            {readTime} min read
                        </span>
                    )}
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gold/10 text-gold"
                            >
                                <FiTag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </motion.header>

            {/* Content - styled for MDX rendering */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-heading prose-headings:text-dark-temple dark:prose-headings:text-gold
          prose-p:text-brown/80 dark:prose-p:text-beige/80
          prose-a:text-gold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-dark-temple dark:prose-strong:text-gold
          prose-code:text-gold prose-code:bg-gold/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-blockquote:border-gold prose-blockquote:bg-gold/5 prose-blockquote:rounded-r-xl
          prose-li:text-brown/80 dark:prose-li:text-beige/80
        "
            >
                {children}
            </motion.div>

            {/* Bottom divider */}
            <div className="mt-16 pt-8 border-t border-gold/10">
                <p className="text-center text-sm text-brown/50 dark:text-beige/40">
                    Thanks for reading! 🙏
                </p>
            </div>
        </article>
    );
}

// Sample usage/placeholder for MDX integration:
// 
// 1. Install MDX: npm install @mdx-js/react @mdx-js/rollup
// 2. Configure Vite for MDX in vite.config.js
// 3. Create .mdx files in a /content/blog directory
// 4. Use BlogPost as wrapper with CodeBlock and Callout components
