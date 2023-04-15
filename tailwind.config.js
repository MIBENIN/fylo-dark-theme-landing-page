/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors:{  
        'intro-email-background': 'hsl(217, 28%, 15%)',
        'main-background': 'hsl(218, 28%, 13%)',
        'footer-background': 'hsl(216, 53%, 9%)',
        'testimonials-background': 'hsl(219, 30%, 18%)',
        'Cyan': 'hsl(176, 68%, 64%)',
        'Blue': 'hsl(198, 60%, 50%)',
        'Light-Red': 'hsl(0, 100%, 63%)'
      },
      fontFamily:{
        'OpenSans': 'Open Sans, sans-serif',
        'Raleway': 'Raleway, sans-serif',
      }
    },
  },
  plugins: [],
}

