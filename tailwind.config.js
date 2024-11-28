/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        circle: 'circle(50% at 50% 50%)',
      },
      
      backgroundColor: {
        'custom1' : "#F2F2F2",
        'custom2' : "#E6E6FF",
        'custom3' : "#FFEFC7",
        'custom4' : "#FFDDE8",
        'custom5' : '#F9F9F9',
        'custom6' : "#F6F6F6",

      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'], // Set Poppins as the default sans font
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [],

  width: {
    '84': '21rem', // Add custom width (84 = 21rem)
    '96': '24rem', // Another custom width (96 = 24rem)
    '108': '27rem', // Custom width of 27rem
    '120': '30rem', // Custom width of 30rem
    '132': '33rem', // Custom width of 33rem
  },

  color: {
    'col1': '#F0F0F0',
  }


  

}
