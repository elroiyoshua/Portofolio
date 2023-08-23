/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'Sans-serif'],
      mont: ['Montserrat']
    }
  },
  plugins: [require('flowbite/plugin')]
}