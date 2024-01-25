/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#475569",
        secondary: "#ffe4e6",
        complementary: "#cbd5e1"
      },
      fontFamily: {
        outfit: ['Outfit', "sans-serif"]
      }
    },
  },
  plugins: [],
}

