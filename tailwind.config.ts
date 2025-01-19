import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cred: {
          50: "#fd5d5d",
          900: "#900202",
        },
        cgray: {
          50: "#fafafa",
          100: "#eeeeee",
          200: "#cbcbcb",
          300: "#c1c1c1",
          400: "#aaaaaa",
          500: "#616161",
          600: "#484545",
        },
        cblack: {
          100: "#252525",
          900: "#000000",
        },
        cwhite: "#ffffff",
        cgreen: "#70a076",
        cpurple: "#a331e9",
        cpink: "#f931cd",
        ccyan: "#39e99f",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
