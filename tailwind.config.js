/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,ts,tsx}',
    './components/**/*.{html,ts,tsx}',
    './sections/**/*.{html,ts,tsx}',
    './styles/**/*.{ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#544E48',
        'secondary-white': '#DCD5C6',
        'hover-gray': '#F2F3F5',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
