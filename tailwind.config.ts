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
        background: "#050505",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
          dark: "#1d4ed8",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
          dark: "#7c3aed",
        },
        surface: {
          DEFAULT: "#111111",
          light: "#1a1a1a",
          border: "#2a2a2a",
        },
        muted: {
          DEFAULT: "#a1a1aa",
          dark: "#71717a",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a8af633 0deg, #a853ba33 180deg, #e92a6733 360deg)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-clash)"],
      },
    },
  },
  plugins: [],
};
export default config;
