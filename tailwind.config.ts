import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        foreground: "#F5F5F5",
        primary: {
          DEFAULT: "#1DB954",
          foreground: "#0D0D0D",
          dark: "#179b44",
        },
        secondary: {
          DEFAULT: "#2B2B2B",
          foreground: "#F5F5F5",
          dark: "#1a1a1a",
        },
        surface: {
          DEFAULT: "#2B2B2B",
          light: "#3a3a3a",
          border: "#404040",
        },
        muted: {
          DEFAULT: "#D9D9D9",
          dark: "#a3a3a3",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #1DB95433 0deg, #179b4411 180deg, #1DB95433 360deg)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
