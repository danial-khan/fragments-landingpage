import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior:['smooth'],
      fontFamily: {
        serif: ['var(--font-crimson-text)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: "#f5e6d3",
        secondary: "#8b4513",
        semiSecondary: "#6a3514",
      },
    },
  },
  plugins: [],
} satisfies Config;
