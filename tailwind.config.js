export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        'primary': " #856df2"
      },
      fontFamily: {
        'nunito': 'Nunito'
      }
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}