/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#073B32',
          50: '#F0F7F5',
          100: '#D9F1E8',
          200: '#B3E2D2',
          300: '#7ACAB1',
          400: '#3CAE8E',
          500: '#149A84',
          600: '#0C7A68',
          700: '#095B4E',
          800: '#073B32',
          900: '#052923',
          950: '#031713',
        },
        midnight: {
          DEFAULT: '#0A1020',
          50: '#F0F3F9',
          100: '#E0E7F4',
          200: '#C2D0E9',
          300: '#94ACD7',
          400: '#5F82C1',
          500: '#3D60A5',
          600: '#2A4683',
          700: '#1C305F',
          800: '#111D3C',
          900: '#0A1020',
          950: '#050811',
        },
        ivory: {
          DEFAULT: '#F6F3EA',
          50: '#FCFBF8',
          100: '#F6F3EA',
          200: '#ECE6D6',
          300: '#DDD3BA',
          400: '#CABE9C',
          500: '#B2A480',
        },
        sage: '#7C9687',
        mint: '#D9F1E8',
        amberBrand: '#E4A53A',
        coral: '#D84F45',
        coolBlue: '#5877D7',
        sand: '#ECE6D6',
        
        // Backward-compat helpers
        deepForest: '#073B32',
        warmIvory: '#F6F3EA',
        tealBrand: '#149A84',
        coralRed: '#D84F45',
        moss: '#7C9687',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(10, 16, 32, 0.04), 0 1px 2px -1px rgba(10, 16, 32, 0.02)',
        'elevated': '0 4px 12px -2px rgba(10, 16, 32, 0.06), 0 2px 6px -1px rgba(10, 16, 32, 0.04)',
        'float': '0 12px 28px -4px rgba(10, 16, 32, 0.12), 0 4px 12px -2px rgba(10, 16, 32, 0.06)',
      },
      keyframes: {
        radarPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '60%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'radar': 'radarPulse 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'scan': 'scanLine 8s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'spin-slow': 'spin 18s linear infinite'
      }
    },
  },
  plugins: [],
}
