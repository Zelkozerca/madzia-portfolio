module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '640px',
      'sm': '800px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1600px',
      '2xl': '1980px',
    },

    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'DejaVu Sans', 'Verdana', 'sans‑serif'],
      },
      width: {
        half: '50%',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      height: {
        full: '100%',
        '70': '70vh',
        viewport: '100vh',
        screen: 'calc(var(--vh) * 100)',
      },
      minHeight: {
        full: '100%',
        viewport: '100vh',
        screen: 'calc(var(--vh) * 100)',
      },
    },
  },

  variants: {
    overflow: ['responsive', 'first'],
    extend: {
      textColor: ['selection'],
      backgroundColor: ['selection'],
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-selection-variant'),
    // eslint-disable-next-line global-require
    require('tailwindcss-filters'),
  ],
};
