import type { Config } from "tailwindcss";

// Theme 4: Deep Blue & Rose (Bold & Inspiring)
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
        
        // Primary colors (Light backgrounds - soft blue)
        primary: {
          DEFAULT: "#eff6ff",
          light: "#f0f9ff",
          pale: "#dbeafe",
          hover: "#dbeafe",
          foreground: "#171717",
        },
        
        // Secondary colors (Main brand color - deep vibrant blue)
        secondary: {
          DEFAULT: "#1e40af",
          dark: "#1e3a8a",
          medium: "#2563eb",
          light: "#3b82f6",
        },
        
        // Accent color (Primary accent/CTA - vibrant rose)
        accent: {
          DEFAULT: "#e11d48",
          dark: "#be123c",
          darker: "#9f1239",
          light: "#fb7185",
        },
        
        // Highlight color (Secondary accent - vibrant cyan)
        highlight: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          light: "#67e8f9",
        },
        
        // Background variations
        bgAlt: "#f0f9ff",
        bgLight: "#e0f2fe",
        bgPale: "#dbeafe",
        
        // Border colors
        border: {
          light: "#bfdbfe",
          medium: "#2563eb",
          pale: "#e5e7eb",
          accent: "#fb7185",
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
