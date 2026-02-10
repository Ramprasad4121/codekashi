// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import signatureImg from "../assets/signature_Ramprasad.png";

export default function Sidebar({ onNavigate }) {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/audits", label: "Private Audits" },
    { path: "/contests", label: "Contests" },
    { path: "/anchor-sentinel", label: "Anchor Sentinel" },
    { path: "/#testimonials", label: "Testimonials", isAnchor: true },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">
      {/* Signature Logo */}
      <Link to="/" className="sidebar-logo">
        <img
          src={signatureImg}
          alt="Ramprasad"
          className="sidebar-signature"
          draggable="false"
        />
      </Link>

      {/* Navigation */}
      <nav className="sidebar-nav flex-1">
        {navItems.map((item) =>
          item.isAnchor ? (
            <a
              key={item.path}
              href={item.path}
              onClick={onNavigate}
              className={isActive(item.path) ? "active" : ""}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={isActive(item.path) ? "active" : ""}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* CTA Button */}
      <Link to="/contact" className="sidebar-cta">
        Get A Quote
      </Link>

      {/* Email */}
      <div className="sidebar-email">
        <FiMail size={14} />
        <a href="mailto:ramprasadgoud34@gmail.com">ramprasadgoud34@gmail.com</a>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://t.me/ramprasad4121" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram size={18} />
        </a>
        <a href="https://x.com/0xramprasad" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FiTwitter size={18} />
        </a>
        <a href="https://github.com/Ramprasad4121" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub size={18} />
        </a>
      </div>
    </aside>
  );
}
