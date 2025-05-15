// tailwind.config.js
import themeValues from './src/theme.js'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: themeValues.fontSizes,
      colors: themeValues.colors,
         fontFamily: themeValues.fontFamily,
    },
  },
  plugins: [],
};
