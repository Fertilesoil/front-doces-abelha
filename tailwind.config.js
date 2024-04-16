/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': `url('public/assets/images/abelhas-login.jpg')`,
        'abelha-home': `url('assets/images/abelha-home.jpg')`
        // 'login-image': `url('https://i.imgur.com/agvgSWF.jpeg')`,
        // 'abelha-home': `url('https://i.imgur.com/OG7B5Gy.jpeg')`
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