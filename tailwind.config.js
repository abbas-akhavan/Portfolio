const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,jsx}',
    '*.html'
  ],
  theme: {
    extend: {
      fontFamily : {
        'mango' : 'MangoGrotesque'
      },
      colors: {
        'blurBgColor': 'rgba(0,0,0,.4)'
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('isActive', '&.isActive');
    })
  ],
}

