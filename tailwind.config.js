module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    backgroundColor:{
     'primary': '#00B481',
     'secondary': '#333',
     'gray': '#e7e7e7',
     'yellow': '#FBD224',
    },
    textColor: {
      'primary': '#00B481',
      'secondary': '#fff',
      'sea': '#0A2533',
      'custom': '#8f8f8f',
      'berry': '#D42859',
      'orange': '#F8962F',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}