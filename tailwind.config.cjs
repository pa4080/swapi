/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          backgroundColor: {
              "primary-dark": "#242424"
          }
      },
      fontFamily: {
        Starjout: ["Starjout", "normal"],
        Starjedi: ["Starjedi", "normal"]
      }
  },
  plugins: []
};