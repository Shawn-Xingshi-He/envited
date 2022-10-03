/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      lg: "1512px",
    },
    extend: {
      colors: {
        purpleDark: "#240D57",
        purpleLight: "#501FC1",
        envitedPurple: "#8456EC",
        envitedPink: "#E87BF8",
        subtitleGray: "#4F4F4F",

        purple1: "#CCB6FF",
        purple2: "#EDE5FF",
        backgroundRed: "#FFD7E0",

        secondary: "#9500ae",
      },
    },
  },
  plugins: [],
};
