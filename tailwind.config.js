/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // blue-500
        secondary: "#1e40af",
        dark: "#1e293b",
        "gray-750": "#243244", // Add this custom color for dark mode newsletter
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1e293b",
            "h1, h2, h3, h4": {
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: "700",
            },
            a: {
              color: "#2563eb",
              "&:hover": {
                color: "#1e40af",
              },
            },
          },
        },
        invert: {
          css: {
            color: "#e2e8f0",
            "h1, h2, h3, h4": {
              color: "#f1f5f9",
            },
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#93c5fd",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
