import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#C9A84C",
          600: "#B8860B",
          700: "#9A7209",
          800: "#7D5E08",
          900: "#5C4506",
          950: "#3D2E04",
        },
        obsidian: {
          50: "#f7f7f7",
          100: "#e8e8e8",
          200: "#c5c5c5",
          300: "#a1a1a1",
          400: "#6e6e6e",
          500: "#4a4a4a",
          600: "#2e2e2e",
          700: "#1a1a1a",
          800: "#111111",
          900: "#0a0a0a",
          950: "#050505",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        accent: ["var(--font-cinzel)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8860B 0%, #FFD700 40%, #C9A84C 60%, #8B6914 100%)",
        "gold-gradient-h": "linear-gradient(90deg, #8B6914 0%, #FFD700 50%, #8B6914 100%)",
        "dark-texture": "radial-gradient(ellipse at 20% 50%, #1a1a0a 0%, #0a0a0a 100%)",
      },
      animation: {
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 168, 76, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
