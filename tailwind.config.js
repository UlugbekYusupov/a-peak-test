/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#475467",
        labelColor: "#344054",
        textColor: "#667085",
        buttonColor: "#7F56D9",
        borderColor: "#D0D5DD",
        modalColor: "#0C111D"
      },
    },
  },
  plugins: [],
};
