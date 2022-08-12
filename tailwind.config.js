/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '588px',
      lg: '874px',
      xl: '1160px'
    },
    extend: {
      colors: {
        main: '#030303',
        secondary: '#606060',
        general: '#f9f9f9',
        '10-percent': 'rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: []
}
