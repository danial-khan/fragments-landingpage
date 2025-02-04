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
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: "#f5e6d3",
        secondary: "#8b4513"
      },
    },
  },
  plugins: [],
} satisfies Config;
