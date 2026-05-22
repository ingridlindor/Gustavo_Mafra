import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        bg2: "#0f0f0f",
        surface: "#141414",
        gold: "#c9a96e",
        "gold-dim": "#8a6f45",
        cream: "#f0ece4",
        muted: "#6b6660",
        accent: "#e8d5b7",
        danger: "#8b2c2c",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;
