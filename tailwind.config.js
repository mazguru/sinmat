/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/temabaru/layouts/**/*.html",
    "./themes/temabaru/layouts/partials/**/*.html",
  ],
  theme: {
    extend: {
      "colors": {
        "bluem": {
          "50": "#37b7ed",
          "100": "#2dade3",
          "200": "#23a3d9",
          "300": "#1999cf",
          "400": "#0f8fc5",
          "500": "#0585bb",
          "600": "#007bb1",
          "700": "#0071a7",
          "800": "#00679d",
          "900": "#005d93"
        },
        
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
}
