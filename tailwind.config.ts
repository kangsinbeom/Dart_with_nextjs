import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcssAnimated from "tailwindcss-animated"; // require 대체

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/provider/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: { max: "1440px" },
      tablet: { max: "1024px" },
      mobile: { max: "610px" },
    },
    extend: {
      containers: {
        mobile: "600px",
      },
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
    plugin(({ addUtilities }) => {
      addUtilities({
        // 기존 스타일
        ".scale-auto": {
          transition: "transform 300ms",
        },
        ".scale-auto:hover": {
          transform: "scale(1.1)",
        },
        ".scale-auto:active": {
          transform: "scale(0.95)",
        },

        // hover-effect 추가
        ".hover-effect": {
          position: "relative",
          display: "inline-block",
        },
        ".hover-effect::after": {
          content: '""',
          position: "absolute",
          width: "0",
          height: "2px",
          bottom: "-2px",
          left: "50%",
          backgroundColor: "black",
          transition: "width 0.3s ease, left 0.3s ease",
        },
        ".hover-effect:hover::after": {
          width: "100%",
          left: "0",
        },
        ".center-position": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".modal-positon": {
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        ".autocomplete": {},
      });
    }),
    tailwindcssAnimated, // Import된 모듈 사용
  ],
} satisfies Config;
