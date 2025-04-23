/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          primary: '#1e3a5f',
          gold: '#d4af37',
          beige: '#f8f4ed',
          dark: '#2c2c2c',
        },
      },
      
    plugins: [],
  }
}