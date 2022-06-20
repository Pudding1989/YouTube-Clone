module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '588px',
      lg: '874px',
      xl: '1160px'
    },
    borderColor: (theme) => ({
      'search-box': '#cccccc',
      'search-button': '#d3d3d3',
      'log-in': '#065fd4',
      '10-percent': 'rgba(0, 0, 0, 0.1)'
    }),

    backgroundColor: (theme) => ({
      'search-button': '#f8f8f8',
      'search-button-hover': '#f0f0f0',
      general: '#f9f9f9'
    }),

    textColor: {
      main: '#030303',
      secondary: '#606060',
      search: '#111111',
      'log-in': '#065fd4'
    },
    placeholderColor: {
      secondary: '#606060'
    },
    extend: {}
  },
  plugins: []
}
