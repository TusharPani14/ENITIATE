
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumturquoise: "rgba(108, 225, 237, 0.1)",
        white: "#fff",
        royalblue: "#275dea",
        gray: "#080d0d",
        dimgray: "#5b5b5b",
        whitesmoke: "#ececec",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

