import type { Config } from "tailwindcss";

/**
 * Tailwind reads tokens from the CSS variables declared in
 * app/globals.css (:root block). Changing a token value there
 * updates both the custom CSS classes and any Tailwind utility
 * class that consumes it. Single source of truth.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          2: "var(--color-surface)",
          3: "var(--color-surface-raised)",
        },
        line: "var(--color-rule)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          white: "var(--color-text-strong)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          dim: "var(--color-accent-muted)",
          on: "var(--color-on-accent)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        display: "var(--fs-display)",
        h1: "var(--fs-h1)",
        h2: "var(--fs-h2)",
        statement: "var(--fs-statement)",
      },
      spacing: {
        "space-1": "var(--space-1)",
        "space-2": "var(--space-2)",
        "space-3": "var(--space-3)",
        "space-4": "var(--space-4)",
        "space-5": "var(--space-5)",
        "space-6": "var(--space-6)",
        "space-7": "var(--space-7)",
        "space-8": "var(--space-8)",
        "space-9": "var(--space-9)",
        "space-10": "var(--space-10)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out)",
        "in-out-custom": "var(--ease-in-out)",
      },
      transitionDuration: {
        instant: "var(--dur-instant)",
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
      },
    },
  },
  plugins: [],
};

export default config;
