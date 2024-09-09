/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '720px',
      lg: '840px',
      xl: '960px',
      '2xl': '1080px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        loveLight: ['Love Light', 'cursive'],
      },
      colors: {
        fillLight: 'rgb(241, 241, 241)',
        fillSecondaryLight: 'rgb(251, 251, 251)',
        cardLight: 'rgb(241, 241, 241)',
        textLight: 'rgb(80, 73, 69)',
        textActiveLight: 'rgb(181, 118, 20)',
        borderLight: 'rgb(104, 157, 106)',
        borderActiveLight: 'rgb(14, 192, 124)',
        modalLight: 'rgb(52, 58, 64)',

        fillDark: 'rgb(40, 40, 40)',
        fillSecondaryDark: 'rgb(52, 58, 64)',
        cardDark: 'rgb(40, 42, 54)',
        textDark: 'rgb(249, 244, 227)',
        textActiveDark: 'rgb(250, 189, 47)',
        borderDark: 'rgb(214, 93, 14)',
        borderActiveDark: 'rgb(7, 102, 120)',
        modalDark: 'rgb(251, 251, 251)',
      },
    },
  },
  plugins: [],
}
