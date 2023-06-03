/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-purple': '#4D20FF',
        'background-gray': '#FAFAFA',
        'panels-gray': '#F8F8F8',
      },
    },
  },
  plugins: [],
}