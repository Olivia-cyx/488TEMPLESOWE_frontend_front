/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{html,ts,tsx}", "./components/**/*.{html,ts,tsx}", "./sections/**/*.{html,ts,tsx}", "./styles/**/*.{ts,tsx}"]
export const mode = "jit"
export const theme = {
  extend: {
    colors: {
      "primary-yellow": "#544E48",
      "secondary-white": "#DCD5C6",
      "hover-gray": "#F2F3F5",
    },
    transitionTimingFunction: {
      "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
    },
    spacing: {
      120: "18rem",
    },
  },
}
export const plugins = []
