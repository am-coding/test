module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    backgroundColor:{
     'primary': '#00B481',
     'secondary': '#333',
    },
    textColor: {
      'primary': '#00B481',
      'secondary': '#fff',
      'sea': '#0A2533',
      'custom': '#8f8f8f',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}