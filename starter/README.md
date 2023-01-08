# How to get started.

Install TailWind, PostCSS, and AutoPrefixer.
*fyi: by default Next use PostCSS to compiles CSS; its [built-in CSS support](https://nextjs.org/docs/basic-features/built-in-css-support) .*

    > npm install -D tailwindcss postcss autoprefixer
Then create tailwind config & postcss config in top level folder

> *./tailwind.config.js*
>
>```typescript
>/** @type {import('tailwindcss').Config} */
>module.exports = {
>  content: [
>    "./pages/**/*.{js,ts,jsx,tsx}",
>    "./components/**/*.{js,ts,jsx,tsx}",
>  ],
>  theme: {
>    extend: {},
>  },
>  plugins: [],
>}
>```
>*./postcss.config.js*
>```typescript
>module.exports = {
>  plugins: {
>    tailwindcss: {},
>    autoprefixer: {}
>  }
>}
>```
Add the `@tailwind` directives for each of Tailwind’s layers to your  `globals.css` file.
> *./styles/globals.css*
>```css
>@tailwind base;
>@tailwind components;
>@tailwind utilities;
>```

*you ready to go...*
you can copy this starter by

    > npx create-next-app@latest starter --use-npm --example "https://github.com/EXPITC/Tailwind-Saga/tree/main/starter"
