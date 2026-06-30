import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F8",
          100: "#D0D9EA",
          200: "#A1B3D5",
          300: "#728CC0",
          400: "#4366AB",
          500: "#1B3A6B",
          600: "#162F56",
          700: "#0D1B3E",
          800: "#091328",
          900: "#040A14",
        },
        bronze: {
          50: "#FEF3E8",
          100: "#FCDCC0",
          200: "#F9B97E",
          300: "#F09640",
          400: "#E8650A",
          500: "#E8650A",
          600: "#C4540A",
          700: "#9A4208",
          800: "#6E3006",
          900: "#422003",
        },
        cream: "#F5F0E8",
        gold: "#E8A84A",
        dark: "#0E0E0E",
        mid: "#1A1A1A",
        stone: "#2A2520",
        muted: "#8A8070",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
