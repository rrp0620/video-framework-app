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
        cream: "#FAF8F4",
        ink: "#1A1A18",
        accent: "#4A6741",
        muted: "#B8B2A8",
        surface: "#E8E4DC",
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(3.5rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "heading": ["clamp(1.25rem, 2vw, 2rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body": ["1.0625rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "36": "9rem",
      },
      maxWidth: {
        "editorial": "68rem",
      },
    },
  },
  plugins: [],
};
export default config;
