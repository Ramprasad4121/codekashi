// src/components/TestimonialsSection.jsx
import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    quote: "Ram thinks like both an **attacker and a builder**. His audit notes were clear, structured, and extremely impactful.",
    name: "Senior Web3 Engineer",
    role: "DeFi Startup",
  },
  {
    quote: "He caught issues others missed. The **gas optimizations** alone saved us thousands in fees over time.",
    name: "Protocol Founder",
    role: "On-chain Raffle Project",
  },
  {
    quote: "One of the most **disciplined and detail-oriented** junior auditors I've worked with. Highly recommended.",
    name: "Blockchain Security Lead",
    role: "Independent Auditor",
  },
];

// Simple markdown bold parser
const parseBold = (text) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => 
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section">
      <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Feedback from protocols and teams I've worked with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="testimonial-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FiMessageCircle className="text-2xl mb-4" />
            
            <blockquote>
              "{parseBold(t.quote)}"
            </blockquote>

            <div>
              <div className="author">{t.name}</div>
              <div className="role">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
