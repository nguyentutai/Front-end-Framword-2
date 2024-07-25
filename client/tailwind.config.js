import flowbite from "flowbite-react/tailwind";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#1B95F2",
        secondary: "#000",
        util: "#fff",
        list: "#6C809417",
      },
      boxShadow: {
        list: "0px 0px 15px 0px rgba(0, 0, 0, 0.15) inset",
        pro: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        catelist:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
      boxShadow:{
        "list-product":"0px 0px 15px 0px rgba(0, 0, 0, 0.15) inset"
      }
    },
  },
  plugins: [flowbite.plugin()],
};
