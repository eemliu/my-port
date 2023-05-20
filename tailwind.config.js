/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'min':'0px', 'max': '700px'},
      'laptop': '700px',
      // 'laptop': {'min':'700px', 'max': '1280px'},
      // 'desktop': {'min':'1280px', 'max': '5000px'},
    },
    extend: {
      colors: { 
        bgColour1: '#0A1930', 
        bgColour2: '#0B1B36', 
        lightbgColour:'#FFFFFF',
        darkFont: '#001220',
        lightFont1: '#CCD6F6',
        lightFont2: '#8892AF',
        darkFont2: '#435E6E',
        primary: '#14B8A6'
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
        typing: "typing 1.1s steps(11, end), blink 0.7s infinite step-end"
      }
    },
  },
  plugins: [],
}

