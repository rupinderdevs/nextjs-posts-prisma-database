/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          DEFAULT: "#55588B",
          90: "#666CFF",
          80: "#2A7AE9",
          70: "#6EABFF",
          60: "#B4D3FF",
          50: "#F1F4FF",
          40: "#F8F8F8",
        },
        secondary: {
          DEFAULT: "#000C1C",
          90: "#2F3640",
          80: "#505050",
          70: "#3C4454",
          60: "#6B7280",
          50: "#E6E6E6",
          40: "#F6F6F6",
          30: "#ABABAB",
        },
        green: {
          DEFAULT: "#00B10C",
          20: "#F2FFF3",
        },
        orange: {
          DEFAULT: "#FF9900",
          20: "#FFF7EC",
        },
        red: {
          DEFAULT: "#EC0048",
          20: "#FFEBF1",
        },
        blue: {
          DEFAULT: "#00C1C8",
          20: "#EFFEFF",
        },
        purple: {
          DEFAULT: "#8332F5",
          20: "#3374EA",
        },
      },
    },
  },
  plugins: [],
};
