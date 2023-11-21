/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5285F2",
        orange: "#F48D60",
        dark: "#000E29",
      },
      fontFamily: {
        PlusJakataSan: "PlusJakataSan",
        Josefin: "Josefin"
      },
    },
  },
  plugins: [],
};
