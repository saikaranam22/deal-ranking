/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        va: {
          blue: '#005ea2',
          'blue-dark': '#0b4778',
          'blue-light': '#73b3e7',
          red: '#e52207',
          green: '#00a91c',
          gray: {
            50: '#f9fafb',
            100: '#f1f3f6',
            200: '#dfe1e2',
            300: '#a9aeb1',
            400: '#6f7378',
            500: '#565c65',
            600: '#3d4551',
            700: '#2d2e2f',
            800: '#1b1b1b',
            900: '#000000'
          }
        }
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

