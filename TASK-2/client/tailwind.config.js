/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen : "#6B8987",
        customWhite : "#E2D9CD"
      }
    },
  },
  daisyui :{
   themes : ["light"]
  },
  plugins: [require('daisyui'),],
}