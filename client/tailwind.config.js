import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1B95F2",
        secondary:"#000",
        util:"#fff",
      },
    },

  },
  plugins: [flowbite.plugin()],
}