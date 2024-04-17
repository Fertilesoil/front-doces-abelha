import abelhaHome from "./public/assets/images/abelha-home.jpg"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "abelha-home": `url(${abelhaHome})`
        // "abelha-home": "url('https://i.imgur.com/OG7B5Gy.jpeg')"
      },
      fontFamily: {
        ManRope: ["Manrope", "sans-serif"],
        Handlee: ["Handlee", "cursive"],
        Nunito: ["Nunito", "sans-serif"],
        SpecialElite: ["Special Elite", "system-ui"],
      }
    },
  },
  plugins: [],
}