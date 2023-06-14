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
      fontSize: {
        xxs: "0.5rem"
      },
      colors: {
        // Polywrap's "Iris" colors
        // only set ones used within the app right now, as we might want to align them with CIELUV and WCAG
        "polywrap-iris": {
          950: "#06071a",
          800: "#222454",
          600: "#343A80",
          500: "#5361F8",
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
