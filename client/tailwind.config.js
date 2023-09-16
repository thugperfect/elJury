/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens:{
        'sm':'400px',
        'md':'600px',
        'lg':'800px',
        'llg':'900px',
        'xl':'1100px',
        '2xl':'1400px'
      },
      backgroundImage:{
        'backgroung-image':'url("/src/images/bg.jpg")',
      }
    },
  },
  plugins: [],
}

