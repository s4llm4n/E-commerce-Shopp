/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container : {
      center : true,
      padding : 'rem'
    },
    extend: {
      colors : {
        primary : '#FD3D57',
      },
      fontFamily : {
        'poppins' : ['Poppins'],
        'roboto' : ['Roboto'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

