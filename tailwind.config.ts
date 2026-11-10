import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'abyss': {
          900: '#0b1418',
          800: '#132028',
          700: '#1c3040',
        },
        'mint':  { 400: '#5fe3b2' },
        'coral': { 500: '#ff6347' },
        'cream': { 100: '#f7f4ea' },
        'surface': '#182530',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        accent:  ['Outfit', 'sans-serif'],
        sans:    ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
