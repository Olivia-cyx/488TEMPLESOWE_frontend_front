/** @type {import('tailwindcss').Config} */
const content = [
  "./app/**/*.{html,ts,tsx}",
  "./components/**/*.{html,ts,tsx}",
  "./sections/**/*.{html,ts,tsx}",
  "./styles/**/*.{ts,tsx}",
  "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
]
const mode = "jit"
const theme = {
  extend: {
    colors: {
      "primary-yellow": "#544E48",
      "secondary-white": "#DCD5C6",
      "hover-gray": "#F2F3F5",
      "light-gray": "rgb(128, 123, 123); ",
    },
    transitionTimingFunction: {
      "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
    },
    spacing: {
      120: "18rem",
    },
  },
}

// eslint-disable-next-line no-undef
const plugins = ["flowbite/plugin"]

// eslint-disable-next-line no-undef
module.exports = {
  content,
  mode,
  theme,
  plugins,
}
