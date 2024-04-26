/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
        }
      },
      animation: {
        "slide-down": "slideDown .30s linear",
        "slide-up": "slideUp .30s linear"
      },
      backgroundImage: {
        "abelha-home": "url('https://i.imgur.com/OG7B5Gy.jpeg')"
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