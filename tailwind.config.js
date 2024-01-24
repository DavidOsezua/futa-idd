/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#754FE2',
        'primary-bg': '#F8F6FF',
        'stroke': '#C6C6C6',
        'primary-dark': '#24174C',
      },
      fontSize: {
        'display': '45px'
      },
      backgroundImage: {
        'primary-gradient-1': 'linear-gradient(90deg, #754FE2 50%, #754FE2 60%, #B79EFF 68.98%)'
      },
      height: {
        '300': '300px'
      },
      width: {
        '326': '326px'
      }

    },
  },
  plugins: [],
};
