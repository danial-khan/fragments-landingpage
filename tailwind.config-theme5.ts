import type { Config } from "tailwindcss";

// Theme 5: Violet & Mint (Creative & Modern)
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
        
        // Primary colors (Light backgrounds - soft violet)
        primary: {
          DEFAULT: "#f5f3ff",
          light: "#faf5ff",
          pale: "#ede9fe",
          hover: "#ede9fe",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant violet)
        secondary: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          medium: "#8b5cf6",
          light: "#a78bfa",
        },
        
        // Accent color (Primary accent/CTA - vibrant mint)
        accent: {
          DEFAULT: "#10b981",
          dark: "#059669",
          darker: "#047857",
          light: "#34d399",
        },
        
        // Highlight color (Secondary accent - vibrant pink)
        highlight: {
          DEFAULT: "#ec4899",
          dark: "#db2777",
          light: "#f472b6",
        },
        
        // Background variations
        bgAlt: "#faf5ff",
        bgLight: "#f5f3ff",
        bgPale: "#ede9fe",
        
        // Border colors
        border: {
          light: "#ddd6fe",
          medium: "#8b5cf6",
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

