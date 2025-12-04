import type { Config } from "tailwindcss";

// Theme 2: Vibrant Indigo & Coral (Dynamic & Engaging)
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
        
        // Primary colors (Light backgrounds - soft indigo)
        primary: {
          DEFAULT: "#eef2ff",
          light: "#f5f7ff",
          pale: "#e0e7ff",
          hover: "#e0e7ff",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant indigo)
        secondary: {
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
          medium: "#6366f1",
          light: "#818cf8",
        },
        
        // Accent color (Primary accent/CTA - vibrant coral)
        accent: {
          DEFAULT: "#f97316",
          dark: "#ea580c",
          darker: "#c2410c",
          light: "#fb923c",
        },
        
        // Highlight color (Secondary accent - vibrant purple)
        highlight: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          light: "#a78bfa",
        },
        
        // Background variations
        bgAlt: "#f5f7ff",
        bgLight: "#eef2ff",
        bgPale: "#e0e7ff",
        
        // Border colors
        border: {
          light: "#c7d2fe",
          medium: "#6366f1",
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

