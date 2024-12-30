/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        primary: ["Montserrat", "serif"] 
      },
      colors: {
        "primary-color": "var(--primary-color)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
