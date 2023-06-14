// prettier.config.js
/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  quoteProps: "as-needed",
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "auto",
  tailwindAttributes: ['activeClassName'],
}