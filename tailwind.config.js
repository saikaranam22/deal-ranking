/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 4s steps(40) infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '50%, 70%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}; 