// src/components/AuditModal.jsx
// Case study modal for detailed audit breakdown
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiShield, FiAlertTriangle, FiCheckCircle, FiExternalLink } from "react-icons/fi";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
};

export default function AuditModal({ isOpen, onClose, audit }) {
    if (!audit) return null;

    // Sample audit details (would come from props in real use)
    const auditDetails = {
        protocol: audit.title || "Protocol Audit",
        date: audit.date || "2024",
        duration: audit.duration || "2 weeks",
        severity: {
            critical: audit.critical || 0,
            high: audit.high || 1,
            medium: audit.medium || 2,
            low: audit.low || 3,
        },
        summary: audit.summary || "Comprehensive security review of the smart contract codebase.",
        findings: audit.findings || [
            { title: "Reentrancy in withdraw function", severity: "High", status: "Fixed" },
            { title: "Missing access control", severity: "Medium", status: "Fixed" },
            { title: "Gas optimization suggestions", severity: "Low", status: "Acknowledged" },
        ],
    };

    const severityColors = {
        critical: "text-red-500",
        high: "text-orange-500",
        medium: "text-yellow-500",
        low: "text-blue-400",
    };

    const statusColors = {
        Fixed: "bg-green-500/20 text-green-400",
        Acknowledged: "bg-blue-500/20 text-blue-400",
        Pending: "bg-yellow-500/20 text-yellow-400",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] overflow-auto bg-beige dark:bg-dark-temple rounded-2xl shadow-2xl border border-gold/20 z-[101]"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-beige/95 dark:bg-dark-temple/95 backdrop-blur-sm px-6 py-4 border-b border-gold/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FiShield className="text-gold text-xl" />
                                <h2 className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
                                    {auditDetails.protocol}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gold/10 transition-colors"
                            >
                                <FiX className="w-5 h-5 text-brown dark:text-beige" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Meta info */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold">
                                    📅 {auditDetails.date}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold">
                                    ⏱️ {auditDetails.duration}
                                </span>
                            </div>

                            {/* Summary */}
                            <div>
                                <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-2">
                                    Summary
                                </h3>
                                <p className="text-sm text-brown/80 dark:text-beige/70 leading-relaxed">
                                    {auditDetails.summary}
                                </p>
                            </div>

                            {/* Severity breakdown */}
                            <div>
                                <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-3">
                                    Findings by Severity
                                </h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {Object.entries(auditDetails.severity).map(([level, count]) => (
                                        <div
                                            key={level}
                                            className="text-center p-3 rounded-lg bg-white/50 dark:bg-dark-temple/50 border border-gold/10"
                                        >
                                            <span className={`text-2xl font-bold ${severityColors[level]}`}>
                                                {count}
                                            </span>
                                            <p className="text-xs capitalize text-brown/60 dark:text-beige/50 mt-1">
                                                {level}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Findings list */}
                            <div>
                                <h3 className="font-heading font-semibold text-dark-temple dark:text-gold mb-3">
                                    Key Findings
                                </h3>
                                <div className="space-y-2">
                                    {auditDetails.findings.map((finding, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-dark-temple/50 border border-gold/10"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FiAlertTriangle className={severityColors[finding.severity.toLowerCase()]} />
                                                <span className="text-sm text-dark-temple dark:text-beige">
                                                    {finding.title}
                                                </span>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded ${statusColors[finding.status]}`}>
                                                {finding.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* View full report link */}
                            <div className="pt-4 border-t border-gold/10">
                                <button
                                    onClick={onClose}
                                    className="w-full py-3 rounded-full bg-gold text-dark-temple font-semibold hover:brightness-110 transition flex items-center justify-center gap-2"
                                >
                                    <FiCheckCircle /> Close Case Study
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
