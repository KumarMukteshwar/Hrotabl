// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js

const { heroui } = require("@heroui/react");


module.exports = {

  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

    "./public/index.html",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@heroui/react/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],

  theme: { extend: {} },

  darkMode: "class",

  plugins: [heroui()]

};