const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        "20px": "20px",
        "10px": "10px",
        "15px": "15px",
      },
      padding: {
        "5px": "5px",
        "10px": "10px",
        "20px": "20px",
        "8px": "8px",
        "15px": "15px",
      },
      width: {
        20: "20px",
        30: "30px",
        60: "60px",
        "40%": "40%",
        "20%": "20%",
        "60%": "60%",
        "30%": "calc(100% / 3)",
      },
      height: {
        20: "20px",
        30: "30px",
        "20%": "20%",
        "60px": "60px",
      },
      boxShadow: {
        xl: "5px 5px 7px 2px #00000030",
      },
    },
    fontSize: {
      sm: "16px",
      lg: "20px",
    },
    fontWeight: {
      medium: 600,
    },
    borderWidth: {
      1: "1px",
      2: "2px",
    },
    colors: {
      ...colors,
      lightblack: "#0000007a",
      exlightblack: "#00000061",
      lightblue: "#0072ff1c",
      semilightblue: "#3e79c1",
      hoverColor: "#0072ff73",
      silver: "#d7dbe16e",
    },
    minHeight: {
      "1000px": "1000px",
      "40px": "40px",
    },
    maxWidth: {
      "1/2": "50%",
    },
  },
  plugins: [],
};
