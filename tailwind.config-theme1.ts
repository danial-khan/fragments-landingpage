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
        // Base colors
        background: "#ffffff",
        foreground: "#171717",
        
        // Primary colors (Light backgrounds - currently light blue)
        primary: {
          DEFAULT: "#eff6ff",
          light: "#f0f9ff",
          pale: "#dbeafe",
          hover: "#dbeafe",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - currently deep blue)
        secondary: {
          DEFAULT: "#1e40af",
          dark: "#1e3a8a",
          medium: "#3b82f6",
          light: "#60a5fa",
        },
        
        // Accent color (Primary accent/CTA - currently gold/amber)
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          darker: "#b45309",
          light: "#fde68a",
        },
        
        // Highlight color (Secondary accent - currently teal)
        highlight: {
          DEFAULT: "#0d9488",
          dark: "#0f766e",
          light: "#5eead4",
        },
        
        // Background variations
        bgAlt: "#f0f9ff",
        bgLight: "#e0f2fe",
        bgPale: "#dbeafe",
        
        // Border colors
        border: {
          light: "#bfdbfe",
          medium: "#3b82f6",
          pale: "#e5e7eb",
          accent: "#fbbf24",
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

