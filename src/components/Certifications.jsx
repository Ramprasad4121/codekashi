// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiDownload, FiExternalLink } from "react-icons/fi";

const certifications = [
    {
        title: "RektOff x Solana Advanced Security Bootcamp",
        issuer: "RektOff & Solana Foundation",
        date: "2026",
        description:
            "Completed advanced security bootcamp covering Solana program security, common vulnerability patterns, and exploit prevention techniques.",
        pdfPath: "/certificates/Ramprasad_rektoff.pdf",
        badge: "Graduate",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="max-w-5xl mx-auto px-6 py-20 relative">
            {/* Soft glow */}
            <div className="absolute -top-16 left-0 w-48 h-48 bg-gold/10 blur-3xl rounded-full pointer-events-none"></div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-heading font-bold text-center text-dark-temple dark:text-gold mb-6"
            >
                Certifications & Credentials
            </motion.h2>

            <p className="text-center text-brown/80 dark:text-beige/70 max-w-xl mx-auto mb-12">
                Formal training and recognized credentials in blockchain security.
            </p>

            <div className="grid grid-cols-1 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 rounded-2xl bg-white/85 dark:bg-dark-temple/70 border border-gold/20 shadow-lg hover:shadow-xl hover:border-gold/40 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            {/* Certificate Icon */}
                            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                                <FiAward className="text-gold text-4xl" />
                            </div>

                            {/* Certificate Details */}
                            <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
                                        {cert.title}
                                    </h3>
                                    <span className="px-3 py-1 text-xs font-semibold bg-gold text-dark-temple rounded-full">
                                        {cert.badge}
                                    </span>
                                </div>

                                <p className="text-sm text-gold/80 font-medium mb-2">
                                    {cert.issuer} • {cert.date}
                                </p>

                                <p className="text-brown/80 dark:text-beige/80 leading-relaxed mb-4">
                                    {cert.description}
                                </p>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={cert.pdfPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gold rounded-full text-gold hover:bg-gold/10 transition"
                                    >
                                        <FiExternalLink /> View Certificate
                                    </a>
                                    <a
                                        href={cert.pdfPath}
                                        download
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gold text-dark-temple font-semibold rounded-full hover:brightness-110 transition shadow-sm"
                                    >
                                        <FiDownload /> Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
