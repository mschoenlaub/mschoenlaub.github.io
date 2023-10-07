const themeDir = __dirname;

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [themeDir, themeDir + "../"],
    }),
    require("tailwindcss")(process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js"),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
};
