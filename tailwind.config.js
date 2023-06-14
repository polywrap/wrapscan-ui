// @ts-check

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-colton)"],
        display: ["var(--font-colton-xwide)"]
      },
      colors: {
        "polywrap-iris": {
          950: "#06071a",
          900: "#111755",
          800: "#1c257a",
          700: "#2834a1",
          600: "#3443ca",
          500: "#5b65df",
          400: "#8288e8",
          300: "#9ea2ed",
          200: "#c0c3f4",
          100: "#e3e4fa",
          50: "#f9f9fe",
        },
        "polywrap-gray": {
          900: "#1f1f1f",
          800: "#303030",
          700: "#424242",
          600: "#555555",
          500: "#727272",
          400: "#919191",
          300: "#a8a8a8",
          200: "#c6c6c6",
          100: "#e5e5e5",
          50: "#f9f9f9",
        },
      },
      backgroundImage: {
        "polywrap-card": "linear-gradient(271.11deg, rgba(13, 16, 71, 0.8) 0%, rgba(30, 37, 103, 0.8) 100%)",
        "polywrap-card-hover": "linear-gradient(271.11deg, rgba(13, 16, 71, 0.4) 0%, rgba(30, 37, 103, 0.4) 100%)",
      }
    },
  },
  plugins: [],
}
