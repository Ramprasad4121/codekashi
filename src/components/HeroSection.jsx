// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import signatureImg from "../assets/signature_Ramprasad.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Signature */}
      <div className="fade-in">
        <img
          src={signatureImg}
          alt="Ramprasad signature"
          className="hero-signature"
          draggable="false"
        />
      </div>

      {/* Title */}
      <h1 className="hero-title fade-in stagger-1">
        Expert Security Researcher
      </h1>

      {/* Stats Line */}
      <p className="hero-stats fade-in stagger-2">
        <strong>6+</strong> Audits & <strong>15+</strong> Contests & <strong>Top 3</strong> Finishes
      </p>

      {/* CTA */}
      <Link to="/contact" className="hero-cta fade-in stagger-3">
        Request An Audit
      </Link>
    </section>
  );
}
