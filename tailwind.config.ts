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
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
