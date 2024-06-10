/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#131417",
        secondary:"#1E1F26",
        primaryText:"#868CA0",
        text555:"#555",
      },
      screens: {
        'xs': '360px', // Define the 'xs' breakpoint at 480px
      },
      height: {
        '20p': '20%',
        '80p':'80%',
      },
    },
  },
  plugins: [],
}