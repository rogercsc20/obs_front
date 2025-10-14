import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0A6DE6',
          50: '#E8F0FD',
          100: '#D1E1FB',
          200: '#A3C4F7',
          300: '#75A6F2',
          400: '#4789EE',
          500: '#0A6DE6',
          600: '#0858B8',
          700: '#06428B',
          800: '#042D5D',
          900: '#02182F'
        },
        surface: { bg: '#0B0D10', panel: '#121418', border: '#1F242B' },
        textc: { base: '#E6E9EE', muted: '#A9B0BA' }
      },
      borderRadius: { xl: '20px', lg: '16px', md: '12px', sm: '8px' },
      boxShadow: { soft: '0 8px 24px rgba(0,0,0,.35)' }
    },
  },
  plugins: [],
}
export default config
