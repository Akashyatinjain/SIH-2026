/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepForest: '#063B2E',
        midnight: '#0B1220',
        moss: '#4C745F',
        warmIvory: '#F7F5EF',
        sand: '#EAE4D7',
        tealBrand: '#0F8B7A',
        amberBrand: '#E1A33A',
        coralRed: '#D95445',
        mist: '#E8EFEC',
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#0F8B7A',
          600: '#063B2E',
          700: '#063B2E',
          800: '#063B2E',
          900: '#052a21',
          950: '#031712',
        },
        agri: {
          green: '#063B2E',
          dark: '#0B1220',
          accent: '#0F8B7A',
          light: '#F7F5EF',
          gold: '#E1A33A',
          danger: '#D95445',
          navy: '#0B1220',
          blue: '#0F8B7A',
          sky: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans Devanagari', 'sans-serif'],
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.25)', opacity: '0.2' },
          '100%': { transform: 'scale(0.95)', opacity: '0.8' },
        },
        badgeFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'badge-float': 'badgeFloat 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
