/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abstract: ['"KohinoorZerone-Zero", sans-serif'],
      },
      keyframes: {
        flashtext: {
          "0%": { color: "#000" },
          "14.9%": { color: "#000" },
          "15%": { color: "#fff" },
          "15.1%": { color: "#000" },
          "16%": { color: "#fff" },
          "16.1%": { color: "#000" },
          "17%": { color: "#fff" },
          "17.1%": { color: "#000" },
          "18%": { color: "#fff" },
          "18.1%": { color: "#000" },
          "19%": { color: "#fff" },
          "19.1%": { color: "#000" },
          "100%": { color: "#000" },
        },
        wiggle: {
          "0%": { rotate: "0deg" },
          "14.9%": { rotate: "0deg" },
          "15%": { rotate: "2.5deg" },
          "15.5%": { rotate: "-2.5deg" },
          "16%": { rotate: "2.5deg" },
          "16.5%": { rotate: "-2.5deg" },
          "17%": { rotate: "2.5deg" },
          "17.5%": { rotate: "-2.5deg" },
          "18%": { rotate: "2.5deg" },
          "18.5%": { rotate: "-2.5deg" },
          "19%": { rotate: "2.5deg" },
          "19.5%": { rotate: "0deg" },
          "100%": { rotate: "0deg" },
        },
      },
      animation: {
        flashtext: "flashtext 10s infinite",
        wiggle: "wiggle 10s infinite",
      },
    },
  },
  plugins: [],
};
