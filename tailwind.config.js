/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px', // Change lg breakpoint to 1200px
      xl: '1280px',
    },
    extend: {
      width: {
        '55p': '55%',
        '45p':'45%',
        '30p': '30%;',
        '80p': '80%;',
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