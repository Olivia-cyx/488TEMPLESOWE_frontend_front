/** @type {import('tailwindcss').Config} */
const content = ["./app/**/*.{html,ts,tsx}", "./components/**/*.{html,ts,tsx}", "./sections/**/*.{html,ts,tsx}", "./styles/**/*.{ts,tsx}"]
const mode = "jit"
const theme = {
  extend: {
    colors: {
      "primary-yellow": "#544E48",
      "secondary-white": "#DCD5C6",
      "hover-gray": "#F2F3F5",
      "input-gray": "#776D65",
    },
    transitionTimingFunction: {
      "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
    },
    spacing: {
      120: "18rem",
    },
    top: {
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
    },
    left: {
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
    },
  },
}

// eslint-disable-next-line no-undef
const plugins = []

// eslint-disable-next-line no-undef
module.exports = {
  content,
  mode,
  theme,
  plugins,
}
