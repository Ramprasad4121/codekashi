import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import HomePage from "./pages/HomePage.jsx";
import AuditsPage from "./pages/AuditsPage.jsx";
import ContestsPage from "./pages/ContestsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AnchorSentinelPage from "./pages/AnchorSentinelPage.jsx";

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Fixed Left Sidebar (Desktop) */}
        <Sidebar />
        
        {/* Mobile Header */}
        <MobileHeader />

        {/* Main Content Area */}
        <main className="main-content">
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-400">Loading...</div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/audits" element={<AuditsPage />} />
              <Route path="/contests" element={<ContestsPage />} />
              <Route path="/anchor-sentinel" element={<AnchorSentinelPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}