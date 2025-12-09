import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Headers.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import FloatingHireButton from "./components/FloatingHireButton.jsx";
import HireMeRibbon from "./components/HireMeRibbon.jsx";
import AuditCaseStudy from "./pages/AuditCaseStudy.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import LotusBackToTop from "./components/LotusBackToTop.jsx";
import CursorTrail from "./components/CursorTrail.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("codekashi:dark");
      return stored === "1";
    } catch {
      return false;
    }
  });

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Show loading for 1.8 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("codekashi:dark", isDarkMode ? "1" : "0");
  }, [isDarkMode]);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Scroll Progress Indicator */}
      {!isLoading && <ScrollProgress />}

      {/* Cursor Trail Effect */}
      {!isLoading && <CursorTrail />}

      <Router>
        <div className="min-h-screen flex flex-col bg-beige dark:bg-dark-temple text-brown dark:text-beige transition-colors">
          <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(s => !s)} />

          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Loading…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/audit/:id" element={<AuditCaseStudy />} />
              </Routes>
            </Suspense>
          </main>

          <HireMeRibbon />
          <Footer />
          <FloatingHireButton />
          <LotusBackToTop />
        </div>
      </Router>
    </>
  );
}