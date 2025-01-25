/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4994d2',
        secondary: '#1B365D',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
