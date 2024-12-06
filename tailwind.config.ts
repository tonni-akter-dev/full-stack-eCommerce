import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEEB9D",
        light_gray:"#AEB0B6",
        primary_color: "#CC0D39",
        secondary_color: "#F7941F",
        secondary_light_color: "#FEEB9D",
        primary_dark_color: "#13172B",
        white_color: "#ffffff",
        text_color: "#5E626F",
        main_bg: "#FFFAF3",
        gray_bg: "#F9F3F0",
      },
    },
  },
  plugins: [],
} satisfies Config;
