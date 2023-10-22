/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
