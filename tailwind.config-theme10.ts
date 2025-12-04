import type { Config } from "tailwindcss";

// Theme 10: Lavender & Sage (Serene & Balanced)
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
        
        // Primary colors (Light backgrounds - soft lavender)
        primary: {
          DEFAULT: "#faf5ff",
          light: "#f3e8ff",
          pale: "#e9d5ff",
          hover: "#e9d5ff",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant lavender)
        secondary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          medium: "#a78bfa",
          light: "#c4b5fd",
        },
        
        // Accent color (Primary accent/CTA - vibrant sage green)
        accent: {
          DEFAULT: "#10b981",
          dark: "#059669",
          darker: "#047857",
          light: "#34d399",
        },
        
        // Highlight color (Secondary accent - vibrant fuchsia)
        highlight: {
          DEFAULT: "#d946ef",
          dark: "#c026d3",
          light: "#f0abfc",
        },
        
        // Background variations
        bgAlt: "#f3e8ff",
        bgLight: "#e9d5ff",
        bgPale: "#ddd6fe",
        
        // Border colors
        border: {
          light: "#ddd6fe",
          medium: "#a78bfa",
          pale: "#e5e7eb",
          accent: "#34d399",
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

