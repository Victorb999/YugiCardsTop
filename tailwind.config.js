/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}", "index.html"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Lekton", "monospace"],  
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },    
  },
  plugins: [],
};
