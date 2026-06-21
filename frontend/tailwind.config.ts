import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          50: '#eef2f8',
          100: '#d3def0',
          600: '#13325c',
          700: '#0f274a',
          800: '#0b1e3a',
          900: '#081830',
          950: '#050f20',
        },
        brand: {
          DEFAULT: '#2E9E4F',
          50: '#eafaef',
          100: '#cdf0d8',
          200: '#9fe1b4',
          300: '#69cd88',
          400: '#3fb567',
          500: '#2E9E4F',
          600: '#22803f',
          700: '#1c6634',
          800: '#19522c',
          900: '#154427',
        },
        accent: {
          DEFAULT: '#1B6FB8',
          500: '#1B6FB8',
          600: '#155a97',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(11, 37, 69, 0.18)',
        'card-hover': '0 22px 60px -16px rgba(11, 37, 69, 0.28)',
        glow: '0 0 0 1px rgba(46,158,79,0.25), 0 18px 50px -12px rgba(46,158,79,0.35)',
      },
      backgroundImage: {
        'navy-radial':
          'radial-gradient(circle at 20% 20%, rgba(46,158,79,0.18), transparent 40%), radial-gradient(circle at 85% 15%, rgba(27,111,184,0.18), transparent 45%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
