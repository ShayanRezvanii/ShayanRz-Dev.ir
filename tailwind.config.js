/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "Rubik",
        RubikMD: "Rubik-md",
        RubikbBold: "Rubik-bold",
        RubikBlack: "Rubik-Black",
        RubikLight: "Rubik-light",
        RubikSemiBold: "Rubik-semibold",
      },
    },
  },
  plugins: [],
};
