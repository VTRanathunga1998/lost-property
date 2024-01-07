/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "inter",
      },
      colors: {
        primary: "#00A86B",
        secondary: "#FFC800",
        textDarkColor: "#4D2D18",
      },
    },
  },
  plugins: [],
};
