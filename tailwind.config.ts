import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        charcoal: "#101827",
        stoneGold: "#d8b36a",
        marble: "#f5efe3",
        sand: "#c7aa7b",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "Tahoma", "Arial", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
