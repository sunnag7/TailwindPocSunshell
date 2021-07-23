module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css,img,fonts}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Avenir LT Std', 'Filosofia']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
