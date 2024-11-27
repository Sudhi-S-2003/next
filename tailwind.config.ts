import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Dynamically set via CSS variables
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeOut: "fadeOut 1s forwards", // Reusable fade-out animation
        fadeIn: "fadeIn 1s forwards", // Reusable fade-in animation
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb", // Example primary color
          secondary: "#fbbf24", // Example secondary color
          accent: "#10b981", // Example accent color
          neutral: "#111827", // Neutral background
          "base-100": "#ffffff", // Base background
          info: "#3b82f6", // Info color
          success: "#22c55e", // Success color
          warning: "#f97316", // Warning color
          error: "#ef4444", // Error color
        },
      },
    ],
  },
};

export default config;
