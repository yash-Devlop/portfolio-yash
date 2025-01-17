/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '55p': '55%',
        '45p':'45%',
        '30p': '30%;',
        '800p':'800px'
      },
      height:{
        '100px': '300px',
      },
      fontFamily: {
        'Courier': ['Courier New', 'monospace'],
        'Brush': ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
}