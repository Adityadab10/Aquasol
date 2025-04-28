/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files in the src folder
  ],
  theme: {
    extend: { colors: {
      oceanBlue: "#0077B6",
      solarYellow: "#FFD60A",
      leafGreen: "#52B788",
      lightBlue: "#ADE8F4",
      warmWhite: "#F7F7F7",
      darkCharcoal: "#333333",
    },}, // Add custom styles or extensions here if needed
  },
  plugins: [], // Add Tailwind plugins here if required
};
