// src/components/CertificationsSection.jsx
import React from "react";
import { FiAward, FiExternalLink, FiDownload } from "react-icons/fi";

const certifications = [
  {
    title: "RektOff Security Bootcamp",
    issuer: "RektOff — Decentralized Security Research Collective",
    description:
      "Completed the intensive blockchain security bootcamp covering Solana, Rust, and smart contract vulnerability analysis. Earned verified NFT certificate.",
    tags: ["Blockchain Security", "Solana", "Rust", "Smart Contracts"],
    pdfUrl: "/certificates/Ramprasad_rektoff.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Verified credentials in blockchain security and smart contract auditing.
      </p>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-200 hover:border-gray-400 transition-colors p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 bg-black text-white flex items-center justify-center">
                <FiAward className="text-2xl" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{cert.issuer}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-gray-300 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-500 transition-colors"
                  >
                    <FiExternalLink />
                    View Certificate
                  </a>
                  <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-500 transition-colors"
                  >
                    <FiDownload />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
