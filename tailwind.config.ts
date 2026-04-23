import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0A",
          2: "#111111",
          3: "#181818",
        },
        line: "#222222",
        text: {
          DEFAULT: "#E2DED6",
          muted: "#787066",
          white: "#F0EDE8",
        },
        accent: {
          DEFAULT: "#C8783A",
          dim: "#8A4E22",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wide2: "0.12em",
      },
      fontSize: {
        "hero": "clamp(52px, 6vw, 88px)",
        "section": "clamp(36px, 4vw, 56px)",
        "cta": "clamp(48px, 6vw, 84px)",
        "stat": "clamp(32px, 3vw, 42px)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
