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
      keyframes: {},
      animation: {
        "under-line": "",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities(
        {
          ".custom-scale-auto": {
            transition: "transform 300ms",
          },
          ".custom-scale-auto:hover": {
            transform: "scale(1.1)", // hover 상태에서 scale 1.1
          },
          ".custom-scale-auto:active": {
            transform: "scale(0.95)", // active 상태에서 scale 0.95
          },
        },
        ["responsive", "hover", "active"] // responsive, hover, active 상태 지원
      );
    },
  ],
} satisfies Config;
