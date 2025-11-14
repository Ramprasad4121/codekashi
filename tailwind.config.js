/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4A017",
        beige: "#F5F5DC",
        brown: "#8B4513",
        "dark-temple": "#1A1005",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],

  extend: {
  keyframes: {
    slowspin: { 
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    softpulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.85 }
    }
  },
  animation: {
    "slow-spin": "slowspin 20s linear infinite",
    "pulse-soft": "softpulse 4s ease-in-out infinite",
  }
},

extend: {
  animation: {
    "spin-slow": "spin 14s linear infinite",
  },
}
};