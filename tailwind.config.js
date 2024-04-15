/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('./src/assets/abelhas-login.jpg')",
        'abelha-home': "url('./src/assets/abelha-home.jpg')"
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


// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero-pattern': "url('/img/hero-pattern.svg')",
//         'footer-texture': "url('/img/footer-texture.png')",
//       }
//     }
//   }
// }