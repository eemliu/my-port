/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        bgColour1: '#222220', 
        bgColour2: '#353532', 
        lightbgColour:'#FFFFFF',
        darkFont: '#001220',
        lightFont: '#FFFFFF',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(30) infinite alternate, blink 0.8s infinite"
      }
    },
  },
  plugins: [],
}

