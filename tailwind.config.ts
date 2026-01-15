import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F2482D",
        },
        surface: {
          dark: "#000000",
          light: "#FFFFFF",
        },
        text: {
          muted: "#8A8A8A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
