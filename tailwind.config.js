const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'blurBgColor': '#ffffff1a'
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('isActive', '&.isActive');
    })
  ],
}

