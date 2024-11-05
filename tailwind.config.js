/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#5B5B5B',
        'custom-blue': '#8080FF',
      },
      fontFamily: {
        Nunito: ["Nunito", ...defaultTheme.fontFamily.sans],              
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(136deg, #009 1.12%, #003 98.77%)',
        'custom-gradient-button': 'linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), #FFF',

      },
      borderRadius: {
        'DashBoardRadius': '10px', 
      },
    },
  },
  plugins: [
    require("tailwindcss-fluid-type")({
      values: {
        // ...
        base: 0,
        // ...
      },
    }),
  ],
}