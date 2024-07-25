/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '375': '93.75rem',
      },
      height: {
        '157.5': '39.375rem',
      },
      inset: {
        '1500px': '1500px',
        '30px': '30px'
      }
    },
  },
  plugins: [],
}

