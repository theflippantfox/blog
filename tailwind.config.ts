import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts,md,svx}',
    './src/lib/**/*.md',
  ],

  theme: {
    extend: {}
  },

  plugins: []
} satisfies Config;
