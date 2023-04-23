/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#000509', 
        secondary: '#11172c', 
      }
    },
  },
  plugins: [],
}

