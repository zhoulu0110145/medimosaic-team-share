/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#203449",
        mist: "#eef7f5",
        canvas: "#f7faf8",
        primary: {
          50: "#eef7f5",
          100: "#d6ebe6",
          200: "#b3d9d0",
          300: "#89c0b3",
          400: "#5eaa99",
          500: "#438d7f",
          600: "#336f64",
          700: "#285a52",
          800: "#224945",
          900: "#1f3d3a"
        },
        warm: {
          50: "#fffaf3",
          100: "#fef0d6",
          200: "#f7d7a8",
          300: "#efbf7b"
        },
        success: "#2b7f6b",
        warning: "#c5842b",
        danger: "#c65348",
        info: "#4d79b6"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(32, 52, 73, 0.12)",
        card: "0 10px 30px rgba(67, 141, 127, 0.12)"
      },
      fontFamily: {
        sans: ["Aptos", "\"Avenir Next\"", "\"Segoe UI\"", "\"Noto Sans\"", "sans-serif"],
        display: ["\"Aptos Display\"", "\"Trebuchet MS\"", "\"Avenir Next\"", "sans-serif"]
      },
      backgroundImage: {
        shell:
          "radial-gradient(circle at top left, rgba(214, 235, 230, 0.85), transparent 32%), radial-gradient(circle at bottom right, rgba(247, 215, 168, 0.36), transparent 34%), linear-gradient(180deg, #f8fcfb 0%, #f2f7f6 100%)"
      }
    }
  },
  plugins: []
};
