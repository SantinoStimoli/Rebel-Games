/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/style.css", "./js/main.js", "./**.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
