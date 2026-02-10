// src/components/MobileHeader.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiGithub, FiTwitter, FiMail, FiArrowRight } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/audits", label: "Audits" },
    { path: "/contests", label: "Contests" },
    { path: "/anchor-sentinel", label: "Anchor Sentinel" },
    { path: "/contact", label: "Contact" },
  ];

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-topbar">
        <Link to="/" className="mobile-logo" onClick={close}>
          <span className="text-lg font-bold tracking-tight">Ramprasad</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="mobile-nav">
          <nav className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={close}
                className={`text-xl font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/Ramprasad4121" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              <FiGithub size={20} />
            </a>
            <a href="https://x.com/0xramprasad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              <FiTwitter size={20} />
            </a>
            <a href="https://t.me/ramprasad4121" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              <FaTelegram size={20} />
            </a>
            <a href="mailto:ramprasadgoud34@gmail.com" className="text-gray-400 hover:text-black">
              <FiMail size={20} />
            </a>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={close}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium"
          >
            Get A Quote
            <FiArrowRight size={14} />
          </Link>
        </div>
      )}
    </>
  );
}
