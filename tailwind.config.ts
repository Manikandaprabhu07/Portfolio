import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eaf8ff',
          100: '#d6f0ff',
          200: '#b1e5ff',
          300: '#7dd0ff',
          400: '#30b7ff',
          500: '#0ea5e9',
          600: '#0b7cb5',
          700: '#0f648f',
          800: '#155373',
          900: '#14445f',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(14, 165, 233, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
