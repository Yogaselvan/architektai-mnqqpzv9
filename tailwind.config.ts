import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/theme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: {
          50: "#b9b9a8",
          100: "#aeae8b",
          200: "#a1a169",
          300: "#8b8b4d",
          400: "#6d6d38",
          500: "#545428",
          600: "#353518",
          700: "#232310",
          800: "#19190b",
          900: "#0e0e06",
          DEFAULT: "#545428",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#0a0a0f",
            foreground: "#f0f0f5",
            primary: {
              50: "#f0f0e9",
              100: "#e5e4cb",
              200: "#dcdba6",
              300: "#d6d579",
              400: "#d1d04a",
              500: "#cac829",
              600: "#a3a11d",
              700: "#7a7913",
              800: "#4e4d0c",
              900: "#212106",
              DEFAULT: "#cac829",
              foreground: "#0a0a0f",
            },
            secondary: {
              50: "#c9c9bc",
              100: "#bcbca0",
              200: "#afaf80",
              300: "#a1a15b",
              400: "#848445",
              500: "#6c6c34",
              600: "#4b4b22",
              700: "#282812",
              800: "#19190b",
              900: "#0e0e06",
              DEFAULT: "#6c6c34",
              foreground: "#0a0a0f",
            },
            content1: "#141419",
            content2: "#1c1c22",
            content3: "#24242b",
            content4: "#2c2c34",
            divider: "#2a2a33",
            focus: "#cac829",
            default: {
              50: "#c9c9bc",
              100: "#bcbca0",
              200: "#afaf80",
              300: "#a1a15b",
              400: "#848445",
              500: "#6c6c34",
              600: "#4b4b22",
              700: "#282812",
              800: "#19190b",
              900: "#0e0e06",
            },
          },
        },
      },
    }),
  ],
};
export default config;
