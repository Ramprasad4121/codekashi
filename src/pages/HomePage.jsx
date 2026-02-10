// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import StatsGrid from "../components/StatsGrid.jsx";
import WhyTrustSection from "../components/WhyTrustSection.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import CertificationsSection from "../components/CertificationsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsGrid />
      <WhyTrustSection />
      <ProcessSection />
      <CertificationsSection />
      <TestimonialsSection />
    </div>
  );
}
