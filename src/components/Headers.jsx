// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header({ isDarkMode, toggleDarkMode }) {
  const [active, setActive] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "audits", "projects", "skills", "resume", "contact"];

    function onScroll() {
      let current = "home";
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = sec;
        }
      }
      setActive(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "audits", label: "Audits" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="
      w-full 
      py-4 px-6 
      bg-beige/90 dark:bg-dark-temple/90 
      backdrop-blur-md 
      border-b border-gold/20 
      sticky top-0 z-50
    ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3">
          <Logo size={42} />
          <span className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
            CodeKashi
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`
                relative pb-1 transition 
                ${active === item.id ? "text-gold" : "text-brown/80 dark:text-beige/80 hover:text-gold"}
              `}
            >
              {item.label}

              {/* GOLD UNDERLINE INDICATOR */}
              {active === item.id && (
                <span
                  className="
                    absolute left-0 -bottom-[2px] 
                    h-[2px] w-full 
                    bg-gold 
                    rounded-full 
                    animate-nav-underline
                  "
                ></span>
              )}
            </a>
          ))}
        </nav>

        {/* DARK MODE TOGGLE */}
        <button
          onClick={toggleDarkMode}
          className="
            px-3 py-1 
            rounded-md 
            border border-gold 
            text-gold 
            hover:bg-gold/10 
            transition
          "
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}