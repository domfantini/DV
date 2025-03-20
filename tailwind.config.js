/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#2A2016',
        'gold': {
          100: '#F5EDD6',
          200: '#EFE2B9',
          300: '#E9D79C',
          400: '#E3CC7F',
          500: '#DDC162', // Main gold color from logo
          600: '#B19A4E',
          700: '#85733A',
          800: '#594D27',
          900: '#2C2613',
        },
      },
      backgroundImage: {
        'logo-pattern': "url('/src/assets/logo-bg.png')",
      },
    },
  },
  plugins: [],
};