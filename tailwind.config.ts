import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Dosis', 'sans-serif'],
      },
      colors: {
        background: '#363A38',
        foreground: '#F9F9F9',
        primary: 'hsl(170, 38%, 18%)',
        secondary: 'hsl(168, 19%, 36%)',
        accent: 'hsl(167, 90%, 88%)',
      },
      fontSize: {
        display1: '6.875rem',
        display2: '4.25rem',
        heading1: '2.625rem',
        heading2: '1.625rem',
        heading3: '1.25rem',
        paragraph: '1rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
