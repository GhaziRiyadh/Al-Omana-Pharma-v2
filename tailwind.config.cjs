/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#006CA8',
          800: 'rgb(8, 59, 112)',
          900: '#003E60'
        },
        logo: '#175ca8',
        secondary: '',
        footer: '#fff',
        primaryGridant: '#013C5E',
        goalTile: '#d67961',
        secondaryOrange: {
          900: '#F5AF19'
        }
      }
    },
  },
  plugins: [],
}
