const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('color.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl')
        }
      })
    })
  ],
}
/* This is because under-the-hood, frameworks like Vue and Svelte are processin
* g every single <style> block independently, and running your PostCSS plugin 
* chain against each one in isolation.

That means if you have 10 components that each have a <style> block, Tailwind 
is being run 10 separate times, and each run has zero knowledge about the other 
runs. Because of this, when you try to @apply card in Card.svelte it fails, because 
Tailwind has no idea that the card class exists since Svelte processed Card.svelte 
and main.css in total isolation from each other.

The solution to this problem is to define any custom styles you want to @apply 
in your components using the plugin system instead. */

/* This way any file processed by Tailwind that uses this config file will have 
* access to those styles.

Honestly though the best solution is to just not do weird stuff like this at all. 
Use Tailwind’s utilities directly in your markup the way they are intended to 
be used, and don’t abuse the @apply feature to do things like this and you will 
have a much better experience. */
