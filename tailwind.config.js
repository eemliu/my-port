/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  variants: {
    animation: ["motion-safe"]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'min':'0px', 'max': '850px'},
      'laptop': '850px',
      'blob-small': {'min':'850px', 'max': '890px'},
      'small-desktop': '1120px',
      'desktop':'1140px', 
      'monitor': '1230px',
      'large-monitor': '1480px',
    },
    extend: {
      colors: { 
        bgColour1: '#0A1930', 
        bgColour2: '#0B1B36', 
        lightbgColour:'#FAFDFF',
        lightFont1: '#CCD6F6',
        lightFont2: '#8892AF',
        darkFont: '#001220',
        darkFont2: '#435E6E',
        primary: '#14B8A6', 
        secondaryBlue: '#5487DE',
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
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      },
      animation: {
        typing: "typing 1.1s steps(11, end), blink 0.7s infinite step-end",
        fadeIn: "fadeIn 0.5s ease-in forwards",
      }
    },
  },
  plugins: [],
}

