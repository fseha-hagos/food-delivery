/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:
      {
       
        custom_primary: '#F5980C',
        custom_primary_25: 'rgba(245,152,12,0.25)',
        custom_primary_10: 'rgba(245,152,12,0.10)',

        custom_sec: '#2F303A',
        custom_hor: '#A39C9C',
        custom_background: '#F5F5DC',
        custom_border: 'rgba(245,152,12,0.25)',
        custom_trianle_bg: '#D9D9D9',
        custom_black_25: 'rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        wander: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wander: 'wander 3s infinite alternate',
      },
    },
  },
    
  

  plugins: [],


}
