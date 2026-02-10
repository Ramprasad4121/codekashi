// src/components/ProcessSection.jsx
import React from "react";

const steps = [
  { number: "01", title: "Scoping", description: "Understanding your protocol and defining audit boundaries" },
  { number: "02", title: "Auditing", description: "Deep analysis of smart contracts for vulnerabilities" },
  { number: "03", title: "Reporting", description: "Detailed findings with severity and recommendations" },
  { number: "04", title: "Review", description: "Verifying fixes and ensuring secure implementation" },
];

export default function ProcessSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-4">My Audit Process</h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        A structured approach to ensure comprehensive security coverage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="text-5xl font-bold text-gray-200 mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
