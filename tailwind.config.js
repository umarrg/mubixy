const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#C4C4C4',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'silver': '#E6F1FF',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'primary': '#64FFDA',
      'black': '#000'
    },
  },

  plugins: [],
}
