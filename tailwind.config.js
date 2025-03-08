/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
      }

    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
