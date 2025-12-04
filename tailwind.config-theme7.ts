import type { Config } from "tailwindcss";

// Theme 7: Ocean Blue & Turquoise (Calm & Refreshing)
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
        
        // Primary colors (Light backgrounds - soft ocean blue)
        primary: {
          DEFAULT: "#f0f9ff",
          light: "#e0f2fe",
          pale: "#bae6fd",
          hover: "#bae6fd",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant ocean blue)
        secondary: {
          DEFAULT: "#0284c7",
          dark: "#0369a1",
          medium: "#0ea5e9",
          light: "#38bdf8",
        },
        
        // Accent color (Primary accent/CTA - vibrant turquoise)
        accent: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          darker: "#0e7490",
          light: "#22d3ee",
        },
        
        // Highlight color (Secondary accent - vibrant cyan)
        highlight: {
          DEFAULT: "#14b8a6",
          dark: "#0d9488",
          light: "#5eead4",
        },
        
        // Background variations
        bgAlt: "#e0f2fe",
        bgLight: "#bae6fd",
        bgPale: "#7dd3fc",
        
        // Border colors
        border: {
          light: "#7dd3fc",
          medium: "#0ea5e9",
          pale: "#e5e7eb",
          accent: "#22d3ee",
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

