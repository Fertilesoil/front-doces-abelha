/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('./src/assets/516cdefd-88d1-4f1a-a898-20e3f7c47d83.jpg')"
      },
      fontFamily: {
        ManRope: ["Manrope", "sans-serif"],
        Handlee: ["Handlee", "cursive"]
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