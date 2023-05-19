/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
      },
      fontFamily:{
        satoshi : ["Satoshi" , "sans-serif"],
        inter : ["Inter" , "sans-serif"],
      }
    },
  },
  plugins: [],
}