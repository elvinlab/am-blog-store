/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkmode: 'class',
  theme: {
    screens: {
      sm: '600px',
      // => @media (min-width: 640px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '840px',
      // => @media (min-width: 1024px) { ... }

      xl: '960px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1080px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    textColor: {
      skin: {
        base: 'rgb(var(--color-text))',
        active: 'rgb(var(--color-text-active))',
      },
    },

    backgroundColor: {
      skin: {
        fill: 'rgb(var(--color-fill))',
        secondary: 'rgb(var(--color-fill-secondary))',
        card: 'rgb(var(--color-card))',
        modal: 'rgb(var(--color-modal))',
      },
    },
    textDecorationColor: {
      skin: {
        base: 'rgb(var(--color-border))',
        active: 'rgb(var(--color-text-active))',
      },
    },
    borderColor: {
      skin: {
        normal: 'rgb(var(--color-text))',
        base: 'rgb(var(--color-border))',
      },
    },
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        loveLight: ['Love Light', 'cursive'],
      },
      colors: {
        custom: {
          title: '#555',
          subtitle: '#999',
          hover: '#e0a419',
          active: '#ff7f50',
          grey: '#f6f6f6',
          nav: '#ded6d8',
          primary: '#edede9',
          second: '#d6ccc2',
          third: '#f5ebe0',
          forth: '#e3d5ca',
          fifth: '#d5bdaf',
        },
      },
    },
  },
  plugins: [],
}
