import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Bodoni: ['Bodoni Moda', 'serif'],
        Pacifico: ['Pacifico', 'cursive'],
        roboto1: ['Roboto Mono', 'monospace'],
        roboto2: ['Lobster', 'cursive'],
        roboto3: ['Press Start 2P', 'cursive'],
        roboto4: ['Comic Sans MS', 'cursive'],
        roboto5: ['Arial', 'sans-serif'],
        roboto6: ['Montserrat', 'sans-serif'],
        roboto7: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
