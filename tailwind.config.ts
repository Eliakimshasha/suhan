import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Add this line
  theme: {
    extend: {
      fontFamily: {
        title: ['Oswald', 'Noto Sans Japanese'],
        paragraph: ['Noto Sans Japanese', 'poppins'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-blue': '#50a0ff',
      },
    },
  },
  plugins: [],
} satisfies Config;
