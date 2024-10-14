/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },
      ml: { max: "1060px" },
      lg: { max: "900px" },
      md: { max: "768px" }, 
      sm: { max: "640px" }, 
      xs: { max: "450px" }, 
      "sm!": { min: "640px" },
    },
  },
  plugins: [],
};
