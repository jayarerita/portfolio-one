/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenDark': "#115e59",
        //'greenLight': "#5BFFDA",
        'greenLight': "#28ffce",
        'blueDark': "#141E30",
        'blueMedium': "#243B55",
        'greyDark': "#545755",
        'greyMedium': "#a1a1a1",
        'greyLight': "#e6e6e6",
        'purpleLight': "#a7ffeb",
        'purpleDark': "#115e59",
      },
    },
  },
  plugins: [],
}