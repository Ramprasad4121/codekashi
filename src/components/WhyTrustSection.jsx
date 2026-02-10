// src/components/WhyTrustSection.jsx
import React from "react";
import { FiShield, FiCode, FiZap } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Security First",
    description: "Found critical vulnerabilities in DeFi protocols, flash loans, DEXs, and bridges. Each audit catches what others miss.",
  },
  {
    icon: FiCode,
    title: "Deep Technical Expertise",
    description: "Specialized in EVM internals, reentrancy patterns, oracle manipulation, and gas optimization.",
  },
  {
    icon: FiZap,
    title: "Fast & Thorough",
    description: "Deliver comprehensive reports on time with clear, actionable recommendations for your team.",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="section section-alt">
      <h2 className="text-3xl font-bold mb-4">Why Trust Me</h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Track record of finding critical issues and helping protocols ship securely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <feature.icon className="text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
