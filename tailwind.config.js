/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '60p': '60%',
        '40p':'40%',
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