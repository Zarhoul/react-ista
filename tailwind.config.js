/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0A033C',
        'secondary-color': '#3C50E0',
        'tertiary-color': '#FFFFFF',
        'extend-primary-color': '#FDB400',
        'extend-secondary-color': '#ADABBE',
        'hover-primary-color': '#332D5D',
        'hover-secondary-color': '#CECDD8',
        'linear-primary-color': '#CECDD8',
        'linear-secondary-color': '#0A033C',
        'da-primary-color': '#1e2749',
        'da-secondary-color': '#273469',
        'da-tertiary-color': '#E4D9FF',
      },
    },
  },
  plugins: [],
}