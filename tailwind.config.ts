import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#faf7f6",
        "secondary": "#e7daee",
        "dark": "#372c3b",
        "primary": "#e4157c",
        "brown-dark": "#8D7B68",
        "brown-secondary": "#A4907C",
        "brown-primary": "#C8B6A6",
        "brown-light": "#e7d1ba",
      },
      aspectRatio: {
        "21/7": "21/7",
      },
      fontFamily: {
        great: ["var(--font-great)"],
      },
      width: {
        custom: "calc(100vw / 1.8)"
      }
    },
  },
  plugins: [],
};
export default config;
