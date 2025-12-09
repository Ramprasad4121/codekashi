// src/components/ThemeSelector.jsx
// Theme variant selector with multiple color schemes
import React, { createContext, useContext, useState, useEffect } from "react";

// Theme definitions
const themes = {
    temple: {
        name: "Temple Night",
        icon: "🕉️",
        colors: {
            primary: "#D4A017",
            secondary: "#8B4513",
            background: "#1A1005",
            backgroundLight: "#F5F5DC",
            text: "#F5F5DC",
            textDark: "#1A1005",
        },
    },
    lotus: {
        name: "Lotus Dawn",
        icon: "🌸",
        colors: {
            primary: "#E91E8C",
            secondary: "#FF6B6B",
            background: "#1A0A12",
            backgroundLight: "#FFF5F8",
            text: "#FFE4EC",
            textDark: "#1A0A12",
        },
    },
    river: {
        name: "Sacred River",
        icon: "🌊",
        colors: {
            primary: "#00CED1",
            secondary: "#20B2AA",
            background: "#0A1A1A",
            backgroundLight: "#E0FFFF",
            text: "#E0FFFF",
            textDark: "#0A1A1A",
        },
    },
};

const ThemeContext = createContext(null);

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState("temple");

    // Apply theme CSS variables
    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;

        root.style.setProperty("--theme-primary", theme.colors.primary);
        root.style.setProperty("--theme-secondary", theme.colors.secondary);
        root.style.setProperty("--theme-bg", theme.colors.background);
        root.style.setProperty("--theme-bg-light", theme.colors.backgroundLight);
        root.style.setProperty("--theme-text", theme.colors.text);
        root.style.setProperty("--theme-text-dark", theme.colors.textDark);

        // Store preference
        localStorage.setItem("codekashi:theme", currentTheme);
    }, [currentTheme]);

    // Load saved theme
    useEffect(() => {
        const saved = localStorage.getItem("codekashi:theme");
        if (saved && themes[saved]) {
            setCurrentTheme(saved);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Theme selector UI component
export default function ThemeSelector({ className = "" }) {
    const { currentTheme, setCurrentTheme, themes: themeList } = useTheme();

    if (!themeList) return null;

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className="text-sm text-brown/60 dark:text-beige/50 mr-2">Theme:</span>
            {Object.entries(themeList).map(([key, theme]) => (
                <button
                    key={key}
                    onClick={() => setCurrentTheme(key)}
                    className={`
            w-8 h-8 rounded-full flex items-center justify-center
            border-2 transition-all duration-200
            ${currentTheme === key
                            ? "border-gold scale-110 shadow-lg"
                            : "border-transparent hover:border-gold/50"
                        }
          `}
                    title={theme.name}
                    style={{ backgroundColor: theme.colors.primary + "30" }}
                >
                    <span className="text-sm">{theme.icon}</span>
                </button>
            ))}
        </div>
    );
}
