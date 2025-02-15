import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyBold: ["cyBold", "sans-serif"],
        suisse: ["suisse", "sans-serif"],
      },
      backdropBlur: {
        none: "none",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "profile-mobile-bg":
          "url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      colors: {
        brand: "#f97316",
        darkMustard: "#e4a419",
        darkTeal: "#4c77bf",
        matcha: "#b9af4d",
        pepper: "#eb6d67",
        darkBrown: "#3d332c",
      },
    },
    screens: {
      "custom-sm": "520px",
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
});
export default config;
