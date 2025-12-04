import type { Config } from "tailwindcss";

// Theme 3: Sapphire & Peach (Elegant & Warm)
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
        
        // Primary colors (Light backgrounds - soft sapphire)
        primary: {
          DEFAULT: "#eff6ff",
          light: "#f0f9ff",
          pale: "#dbeafe",
          hover: "#dbeafe",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - vibrant sapphire)
        secondary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          medium: "#3b82f6",
          light: "#60a5fa",
        },
        
        // Accent color (Primary accent/CTA - vibrant peach)
        accent: {
          DEFAULT: "#fb923c",
          dark: "#f97316",
          darker: "#ea580c",
          light: "#fdba74",
        },
        
        // Highlight color (Secondary accent - vibrant sky blue)
        highlight: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
          light: "#38bdf8",
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
          accent: "#fdba74",
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

