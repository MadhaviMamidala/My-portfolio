import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cappuccino Color Palette
        cappuccino: {
          50: '#faf8f5',    // Very light cream
          100: '#f5f1ea',   // Light tan
          200: '#ebe3d5',   // Soft beige
          300: '#d4c4ab',   // Warm tan
          400: '#b8a088',   // Medium coffee
          500: '#9d8066',   // Coffee brown
        },
        espresso: {
          400: '#6b5444',   // Rich coffee
          500: '#4a3f35',   // Dark espresso
          600: '#3d3128',   // Deep brown
          700: '#2d2319',   // Very dark brown
        },
        cream: {
          50: '#fdfcfb',    // Almost white cream
          100: '#f8f6f2',   // Light cream
          200: '#f0ebe3',   // Cream
        },
        // Background colors
        background: {
          light: '#faf8f5',
          lightAlt: '#f5f1ea',
          dark: '#2d2319',
          darkAlt: '#3d3128',
        },
        // Text colors
        text: {
          light: '#2d2319',
          lightSecondary: '#6b5444',
          dark: '#faf8f5',
          darkSecondary: '#d4c4ab',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
