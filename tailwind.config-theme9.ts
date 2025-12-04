import type { Config } from "tailwindcss";

// Theme 9: Midnight Blue & Sunset (Bold & Dramatic)
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
        
        // Primary colors (Light backgrounds - soft midnight)
        primary: {
          DEFAULT: "#f1f5f9",
          light: "#f8fafc",
          pale: "#e2e8f0",
          hover: "#e2e8f0",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant midnight blue)
        secondary: {
          DEFAULT: "#1e293b",
          dark: "#0f172a",
          medium: "#334155",
          light: "#475569",
        },
        
        // Accent color (Primary accent/CTA - vibrant sunset orange)
        accent: {
          DEFAULT: "#f97316",
          dark: "#ea580c",
          darker: "#c2410c",
          light: "#fb923c",
        },
        
        // Highlight color (Secondary accent - vibrant pink)
        highlight: {
          DEFAULT: "#ec4899",
          dark: "#db2777",
          light: "#f472b6",
        },
        
        // Background variations
        bgAlt: "#f8fafc",
        bgLight: "#f1f5f9",
        bgPale: "#e2e8f0",
        
        // Border colors
        border: {
          light: "#cbd5e1",
          medium: "#334155",
          pale: "#e5e7eb",
          accent: "#fb923c",
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

