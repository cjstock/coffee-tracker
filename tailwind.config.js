const tailwindcss = require('tailwindcss')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },

  plugins: [require('@tailwindcss/typography'), require("daisyui")],

  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#734046",
          "secondary": "#A05344",
          "accent": "#E79E4F",
          "neutral": "#120C12",
          "base-100": "#321F28",
          "info": "#8CCAC1",
          "success": "#9CB686",
          "warning": "#FFD261",
          "error": "#FC9783",
        },
      },
    ],
  },

}
