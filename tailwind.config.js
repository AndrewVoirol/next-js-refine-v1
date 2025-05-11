/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate")
  ]
};