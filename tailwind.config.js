/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',  // green
        brown: '#8B4513',    // brown color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        aqtcTheme: {
          primary: "#22c55e",   // green
          secondary: "#8B4513", // brown
          accent: "#d1fae5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
