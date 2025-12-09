// src/components/TempleBell.jsx
// Ambient temple bell sound effect with toggle control
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Bell icon SVG
const BellIcon = ({ isActive }) => (
    <svg
        viewBox="0 0 24 24"
        className={`w-5 h-5 transition-colors ${isActive ? "text-gold" : "text-brown/50 dark:text-beige/50"}`}
        fill="currentColor"
    >
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
    </svg>
);

export default function TempleBell() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const audioRef = useRef(null);
    const hasPlayedRef = useRef(false);

    // Create audio context for bell sound
    useEffect(() => {
        // Create a simple bell-like tone using Web Audio API
        const createBellSound = () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            const playBell = () => {
                if (!isEnabled || hasPlayedRef.current) return;

                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // Bell-like frequency
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.type = "sine";

                // Envelope for bell sound
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 1.5);

                hasPlayedRef.current = true;
                setTimeout(() => { hasPlayedRef.current = false; }, 3000);
            };

            return playBell;
        };

        let playBell = null;

        if (isEnabled) {
            playBell = createBellSound();

            // Play on significant scroll
            let lastScrollY = window.scrollY;
            const handleScroll = () => {
                const scrollDelta = Math.abs(window.scrollY - lastScrollY);
                if (scrollDelta > 500) {
                    playBell();
                    lastScrollY = window.scrollY;
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isEnabled]);

    const handleClick = () => {
        setIsEnabled(!isEnabled);

        // Play a quick bell on toggle
        if (!isEnabled) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
            oscillator.type = "sine";

            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.8);
        }
    };

    return (
        <div className="relative">
            <motion.button
                onClick={handleClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
          p-2 rounded-full border transition-all duration-200
          ${isEnabled
                        ? "border-gold bg-gold/10 shadow-lg shadow-gold/20"
                        : "border-gold/30 hover:border-gold/50"
                    }
        `}
                aria-label={isEnabled ? "Disable temple bell" : "Enable temple bell"}
            >
                <motion.div
                    animate={isEnabled ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isEnabled ? Infinity : 0, repeatDelay: 4 }}
                >
                    <BellIcon isActive={isEnabled} />
                </motion.div>
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-dark-temple text-beige whitespace-nowrap z-50"
                    >
                        {isEnabled ? "Bell On 🔔" : "Temple Bell"}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
