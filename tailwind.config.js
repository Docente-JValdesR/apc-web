import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        portada: "url('/portada.png')",
        teatro:
          "url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        patio1:
          "url('https://images.pexels.com/photos/5896843/pexels-photo-5896843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        biblioteca:
          "url('https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        laboratorio:
          "url('https://images.pexels.com/photos/5427855/pexels-photo-5427855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        patio2:
          "url('https://images.pexels.com/photos/15556642/pexels-photo-15556642/free-photo-of-saltando-ladrillos-colegio-escuela.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        comedor:
          "url('https://images.pexels.com/photos/8617514/pexels-photo-8617514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        patio3:
          "url('https://images.pexels.com/photos/5274616/pexels-photo-5274616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
