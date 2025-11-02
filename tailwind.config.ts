import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E3A8A", // <- same blue from AboutUs.tsx (adjust if AboutUs uses different hex)
      },
    },
  },
  plugins: [],
};
export default config;
