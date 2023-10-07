/** @type {import('tailwindcss').Config} */
const themeDir = __dirname;
const colors = require("tailwindcss/colors");
const { borderColor, fontWeight, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    themeDir + "/layouts/**/*.html",
    themeDir + "/assets/**/*.js",
    themeDir + "/assets/**/*.css",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./assets/**/*.css",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      maxWidth: {
        letter: "66.40625rem",
        a4: "64.609375rem",
      },
      fontFamily: {
        headline: ["Fira Sans", ...fontFamily.sans],
        body: ["Merriweather", ...fontFamily.sans],
        mono: ["Fira Code", ...fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.500"),
              fontWeight: "300",
            },
            a: {
              fontWeight: "500",
              color: theme("colors.accent.600"),
              "&:hover": {
                color: theme("colors.accent.800"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            h1: { color: theme("colors.gray.200") },
            h2: { color: theme("colors.gray.200") },
            h3: { color: theme("colors.gray.200") },
            h4: { color: theme("colors.gray.200") },
            h5: { color: theme("colors.gray.200") },
            h6: { color: theme("colors.gray.200") },
            a: { color: theme("colors.accent.500") },
            p: { color: theme("colors.gray.200") },
            ul: { color: theme("colors.gray.200") },
            ol: { color: theme("colors.gray.200") },
            figcaption: { color: theme("colors.gray.300") },
            strong: { color: theme("colors.gray.200") },
            span: { color: theme("colors.gray.200") },
            code: {
              color: theme("colors.gray.200"),
              fontWeight: 800,
            },
          },
        },
      }),
      lineHeight: {
        snugish: "1.32",
        normal: "1.34",
      },
      height: {
        letter: "85.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
        a4: "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        accent: colors.pink,
      },
      animation: {
        blink: "blink 1s linear infinite",
      },
      keyframes: (theme) => ({
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
