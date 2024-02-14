/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'phone': "url('./src/assets/Block 1 3.svg)"
      }
    },
  },
  plugins: [],
}

