import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tbc: {
          orange: "#F97316",
          "orange-dark": "#EA6C0A",
          "orange-light": "#FB923C",
          cream: "#FFF8F0",
          "cream-dark": "#FEF0DC",
          black: "#0A0A0A",
          "gray-900": "#111111",
          "gray-800": "#1C1C1E",
          "gray-700": "#2C2C2E",
          "gray-600": "#3A3A3C",
          "gray-100": "#F5F5F7",
          "gray-200": "#E8E8ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-orange": "pulseOrange 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseOrange: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(249, 115, 22, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(249, 115, 22, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-tbc":
          "linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0A0A0A 0%, #1C1C1E 100%)",
        "gradient-hero":
          "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.85) 100%)",
      },
      boxShadow: {
        orange: "0 4px 24px rgba(249, 115, 22, 0.35)",
        "orange-lg": "0 8px 40px rgba(249, 115, 22, 0.45)",
        card: "0 2px 16px rgba(0,0,0,0.08)",
        "card-dark": "0 2px 16px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
