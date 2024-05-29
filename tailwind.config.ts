import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'black',
      },
      backgroundImage: {},
      fontFamily: {
        inconsolata: ['var(--font-inconsolata)', 'monospace'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
