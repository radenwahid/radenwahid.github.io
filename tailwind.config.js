/** @type {import('tailwindcss').Config} */
module.exports = {

  // ...
  content: ["./Public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding: '16px',
    },


    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      '4xl': '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

