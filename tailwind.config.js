/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'selector',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors : {
        'blurBgColor' : '#ffffff1a'
      }
    },
  },
  plugins: [],
}

