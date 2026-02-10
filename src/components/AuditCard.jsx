// src/components/AuditCard.jsx
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function AuditCard({ audit, reverse = false }) {
  return (
    <div className={`audit-card ${reverse ? 'reverse' : ''}`}>
      {/* Content Side */}
      <div className="audit-content flex flex-col justify-center">
        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          {audit.type}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{audit.name}</h3>
        
        <ul className="space-y-2 mb-6">
          {audit.findings.map((finding, idx) => (
            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
              <span className="text-primary">•</span>
              {finding}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {audit.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs border border-gray-300 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={audit.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          View Full Report
          <FiArrowUpRight />
        </a>
      </div>

      {/* Icon/Visual Side */}
      <div className="audit-image flex items-center justify-center bg-gray-50 p-12">
        <div className="text-6xl md:text-8xl font-bold text-gray-200">
          {audit.name.charAt(0)}
        </div>
      </div>
    </div>
  );
}
