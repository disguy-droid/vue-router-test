/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
        fontFamily: {
            clashGrotesk: " 'Clash Grotesk', sans-serif ",
        }
    },
  },
  plugins: [],
}
