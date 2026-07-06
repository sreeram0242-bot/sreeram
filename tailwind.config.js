/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['Preahvihear', 'Helvetica', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'Helvetica', 'sans-serif'],
        poppins: ['Poppins', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
