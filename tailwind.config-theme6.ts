import type { Config } from "tailwindcss";

// Theme 6: Royal Purple & Gold (Luxurious & Prestigious)
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
        
        // Primary colors (Light backgrounds - soft purple)
        primary: {
          DEFAULT: "#faf5ff",
          light: "#faf5ff",
          pale: "#f3e8ff",
          hover: "#f3e8ff",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant purple)
        secondary: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          medium: "#8b5cf6",
          light: "#a78bfa",
        },
        
        // Accent color (Primary accent/CTA - vibrant gold)
        accent: {
          DEFAULT: "#eab308",
          dark: "#ca8a04",
          darker: "#a16207",
          light: "#fde047",
        },
        
        // Highlight color (Secondary accent - vibrant amber)
        highlight: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fbbf24",
        },
        
        // Background variations
        bgAlt: "#faf5ff",
        bgLight: "#f3e8ff",
        bgPale: "#e9d5ff",
        
        // Border colors
        border: {
          light: "#e9d5ff",
          medium: "#8b5cf6",
          pale: "#e5e7eb",
          accent: "#fde047",
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

