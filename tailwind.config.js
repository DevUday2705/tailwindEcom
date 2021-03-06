module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "6rem",
      },
      spacing: {
        144: "36rem",
      },
    },
    fontFamily: {
      gotham: ["Gotham Pro", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1590px",
    },
    colors: {
      white: "#ffff",
      orange: {
        100: "#FEEDD3",
        200: "FE7865",
        300: "#E6604D",
        400: "#F55C46",
      },
      blue: {
        100: "#F5F8FC",
        200: "#EFEDFE",
        300: "#5BD5EC",
      },
      green: {
        100: "#FFFBF8",
        200: "#E8FBF7",
        300: "#5BE6B0",
      },
      gray: {
        100: "#ECECEE",
        200: "#DFDAFE",
        300: "#83838B",
      },
      pink: {
        100: "#F55C46",
      },
      black: {
        100: "#2C2E3F",
        200: "#141517",
        300: "#2C23EF",
        400: "#1D2539",
      },
    },
  },
  plugins: [],
};
