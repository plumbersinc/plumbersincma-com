require("dotenv").config();
const filters = require("./config/filters.js");
const shortcodes = require("./config/shortcodes.js");

module.exports = function (config) {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });
  config.addPassthroughCopy({
    "node_modules/@glidejs/glide/dist/glide.min.js": "/js/glide.min.js",
  });
  config.addPassthroughCopy({
    "node_modules/@glidejs/glide/dist/css/glide.core.min.css":
      "/styles/glide.core.min.css",
  });
  config.addPassthroughCopy({
    "node_modules/glightbox/dist/js/glightbox.min.js": "/js/glightbox.min.js",
  });
  config.addPassthroughCopy({
    "node_modules/glightbox/dist/css/glightbox.min.css":
      "/styles/glightbox.min.css",
  });

  // filters
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });

  // shortcodes
  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
    config.addNunjucksAsyncShortcode(name, shortcodes[name]);
  });

  // environment variables
  config.addGlobalData("env", process.env);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
