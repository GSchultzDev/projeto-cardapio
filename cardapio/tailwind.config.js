/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../assets/banner.png')"
      }
    },
  },
  plugins: [],
}

