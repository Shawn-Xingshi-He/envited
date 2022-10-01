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
        backgroundRed: "#FFD7E0",

        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
