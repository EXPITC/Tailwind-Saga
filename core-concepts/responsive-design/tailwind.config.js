/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // default
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // If i dont provide default value above costume screen name will overide default above
      // I put it for educational purpose

      'tablet': '640px',
      // => @media (min-width: 640px) {...}
      'laptop': '1024px',
      // => @media (min-width: 1024px) {...}
      'desktop': '1280px'
      // => @media (min-width: 1280px) {...}
    }
  },
  plugins: [],
}
