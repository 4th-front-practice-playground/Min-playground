import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#d00055",
      },
      boxShadow: {
        tv: "0 0 0 3px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [],
} satisfies Config;
