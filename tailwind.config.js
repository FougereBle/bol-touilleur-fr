const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: '#FE9738',
      'primary-light': '#FFE5CD'
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms')
  ]
}
