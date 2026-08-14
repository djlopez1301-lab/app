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
        'brand-primary': '#164887',
        'brand-secondary': '#0b2b5e',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-dancing-script)', 'cursive'],
      },
      boxShadow: {
        'apple': '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-lg': '0 12px 48px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;
