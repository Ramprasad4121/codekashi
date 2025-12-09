// src/components/MobileNav.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import yantra from "../assets/gayatri-yantra.svg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "audits", label: "Audits" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function MobileNav({ isOpen, onClose, isDarkMode, toggleDarkMode }) {
  const handleNavClick = (id) => {
    onClose();
    // Small delay to allow drawer to start closing before scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="
              fixed top-0 right-0 bottom-0 
              w-[280px] max-w-[80vw]
              bg-beige dark:bg-dark-temple 
              border-l border-gold/30
              shadow-2xl z-[101]
              flex flex-col
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gold/20">
              <span className="text-xl font-heading font-bold text-dark-temple dark:text-gold">
                CodeKashi
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gold/10 transition text-dark-temple dark:text-gold"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 py-6 px-5 space-y-2 overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => handleNavClick(item.id)}
                  className="
                    w-full text-left
                    py-3 px-4
                    rounded-lg
                    text-lg font-medium
                    text-brown/90 dark:text-beige/90
                    hover:bg-gold/10 hover:text-gold
                    transition-all duration-200
                    flex items-center gap-3
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-gold/40" />
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="p-5 border-t border-gold/20">
              <button
                onClick={toggleDarkMode}
                className="
                  w-full py-3 px-4
                  rounded-lg
                  border border-gold
                  text-gold font-medium
                  hover:bg-gold/10 
                  transition
                  flex items-center justify-center gap-2
                "
              >
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

            {/* Decorative Mandala */}
            <img
              src={yantra}
              alt=""
              className="
                absolute bottom-0 right-0
                w-40 h-40
                opacity-[0.04]
                pointer-events-none
                transform translate-x-1/4 translate-y-1/4
              "
            />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
