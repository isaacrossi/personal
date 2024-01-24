/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
};
