import type { Config } from "tailwindcss";

// Theme 8: Forest Green & Rust (Natural & Grounded)
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
        // Base colors
        background: "#ffffff",
        foreground: "#171717",
        
        // Primary colors (Light backgrounds - soft green)
        primary: {
          DEFAULT: "#f0fdf4",
          light: "#dcfce7",
          pale: "#bbf7d0",
          hover: "#bbf7d0",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant forest green)
        secondary: {
          DEFAULT: "#166534",
          dark: "#14532d",
          medium: "#16a34a",
          light: "#4ade80",
        },
        
        // Accent color (Primary accent/CTA - vibrant rust)
        accent: {
          DEFAULT: "#dc2626",
          dark: "#b91c1c",
          darker: "#991b1b",
          light: "#f87171",
        },
        
        // Highlight color (Secondary accent - vibrant lime)
        highlight: {
          DEFAULT: "#84cc16",
          dark: "#65a30d",
          light: "#a3e635",
        },
        
        // Background variations
        bgAlt: "#dcfce7",
        bgLight: "#bbf7d0",
        bgPale: "#86efac",
        
        // Border colors
        border: {
          light: "#86efac",
          medium: "#16a34a",
          pale: "#e5e7eb",
          accent: "#f87171",
        },
        
        // Text colors
        textMuted: "#64748b",
        textDark: "#1e293b",
        
        // State colors
        error: "#ef4444",
        success: "#10b981",
      },
    },
  },
  plugins: [],
} satisfies Config;

