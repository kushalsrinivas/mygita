/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Ayurveda-inspired color palette
        spiritual: {
          lotus: "#F8BBD9",
          sunrise: "#FFB347",
          himalaya: "#87CEEB",
          om: "#DAA520",
          chakra: "#9370DB",
          earth: "#8B4513",
          sage: "#9CAF88",
          temple: "#CD853F",
          meditation: "#E6E6FA",
          sacred: "#F0E68C",
        },
        primary: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
        },
      },
      fontFamily: {
        "space-mono": ["SpaceMono"],
      },
    },
  },
  plugins: [],
};
