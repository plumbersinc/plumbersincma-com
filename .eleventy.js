module.exports = function (config) {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });
  config.addPassthroughCopy({
    "node_modules/@glidejs/glide/dist/glide.min.js": "/js/glide.min.js",
  });
  config.addPassthroughCopy({
    "node_modules/@glidejs/glide/dist/css/glide.core.css":
      "/styles/glide.core.css",
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
