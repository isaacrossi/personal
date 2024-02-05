/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Pangram"],
        heading: ["Pangram-Bold"],
      },
      textColor: {
        primary: "#FE553E",
      },
      colors: {
        primary: "#FE553E",
      },
      fontSize: {
        "9xl": "182px",
        "8xl": "81px",
      },
    },
  },
  plugins: [],
};
