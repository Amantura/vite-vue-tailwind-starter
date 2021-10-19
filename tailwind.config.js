const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './src/layouts/**/*.{html,js}',
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      green: colors.emerald,
      primary: {
        DEFAULT: '#F48037 !important',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
