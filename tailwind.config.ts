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
          50: "#EEF0F6",
          100: "#D5D9EA",
          200: "#ABB3D5",
          300: "#808CC0",
          400: "#5666AB",
          500: "#2B4096",
          600: "#1A2D70",
          700: "#0D1B3E",
          800: "#091328",
          900: "#040A14",
        },
        bronze: {
          50: "#FBF5EB",
          100: "#F5E6CC",
          200: "#EBCD99",
          300: "#E0B466",
          400: "#D69B33",
          500: "#C8953A",
          600: "#A0762E",
          700: "#785822",
          800: "#503B17",
          900: "#281D0B",
        },
        cream: "#F8F6F0",
        gold: "#E8D5A3",
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
