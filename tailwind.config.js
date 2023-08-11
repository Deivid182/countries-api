/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "var(--darkBlue)",
        veryDarkBlue: "var(--veryDarkBlue)",
        white: "var(--white)",
      }
    },
  },
  plugins: [],
}