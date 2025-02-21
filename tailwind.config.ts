import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",  // Green (friendly, calming)
        secondary: "#FF9800", // Orange (warm, energetic)
        accent: "#03A9F4",    // Blue (professional, engaging)
        background: "#F5F5F5", // Light background
        textPrimary: "#333333",
        textSecondary: "#555555"
      },
    },
  },
  plugins: [],
};

export default config;