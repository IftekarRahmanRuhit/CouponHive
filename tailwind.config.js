/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "winter",
      "cyberpunk",
      "coffee" // This enables the winter theme
    ],
  },
};

