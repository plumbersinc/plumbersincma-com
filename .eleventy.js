module.exports = function (config) {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
