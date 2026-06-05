// NOTE: This project uses Tailwind CSS v4.
// Theme tokens are configured via @theme in src/app/globals.css.
// This file is kept for reference only.
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2E5E3B',
        'forest-dark': '#1e4a2a',
        earth: '#7A5A3A',
        leaf: '#6FAF56',
        parchment: '#F7F2E8',
        'parchment-alt': '#EDE8DF',
        offwhite: '#F7F5EF',
        border: '#d8cfc0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
