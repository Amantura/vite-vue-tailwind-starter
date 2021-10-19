const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,vue,jsx}',
    './src/pages/**/*.{html,js,vue,jsx}',
    './src/components/**/*.{html,js,vue,jsx}',
    './src/layouts/**/*.{html,js,vue,jsx}',
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
