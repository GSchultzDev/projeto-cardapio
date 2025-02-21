/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../assets/banner.png')"
      }
    },
  },
  plugins: [],
}

