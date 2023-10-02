import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light': '#faf7f6',
        'secondary': '#e7daee',
        'dark': '#372c3b',
        'primary': '#e4157c'
      },
      aspectRatio: {
        '21/7': '21/7',
      },
    },
  },
  plugins: [],
}
export default config
