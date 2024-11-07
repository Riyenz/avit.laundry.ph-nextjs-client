/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f50e6",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        saira: ['"Saira"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
