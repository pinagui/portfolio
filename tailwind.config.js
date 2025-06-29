/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{html,ts}",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: [
        'dark',
        /^animate-/,
        /^steam/,
        /^float/,
        /^hover:/,
        /^focus:/,
        /^active:/,
      ]
    }
  }, 
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fef7ed',
          100: '#fde8d3',
          200: '#fbcea5',
          300: '#f8ad6d',
          400: '#f48332',
          500: '#f1650b',
          600: '#e24e06',
          700: '#bb3808',
          800: '#962e0e',
          900: '#78260f',
        },
        cream: {
          50: '#fffbf5',
          100: '#fef6e7',
          200: '#fdebc4',
          300: '#fbda96',
          400: '#f8c766',
          500: '#f5b041',
          600: '#e99525',
          700: '#c1751a',
          800: '#9a5c1a',
          900: '#7e4d1a',
        },
        bean: {
          50: '#f6f3f0',
          100: '#ebe4dd',
          200: '#d8c9bd',
          300: '#c0a595',
          400: '#a8816d',
          500: '#956653',
          600: '#875447',
          700: '#70433c',
          800: '#5e3934',
          900: '#52312f',
        },
        dark: {
          50: '#1f2937',
          100: '#374151',
          200: '#4b5563',
          300: '#6b7280',
          400: '#9ca3af',
          500: '#d1d5db',
          600: '#e5e7eb',
          700: '#f3f4f6',
          800: '#f9fafb',
          900: '#ffffff',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { opacity: 0.7, transform: 'translateY(0) scale(1)' },
          '100%': { opacity: 0, transform: 'translateY(-20px) scale(1.1)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 