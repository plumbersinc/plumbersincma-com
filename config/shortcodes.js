const Image = require("@11ty/eleventy-img");

const carousel = async (
  src,
  alt,
  className = undefined,
  dataSrc = undefined,
  widths = [300, 1200],
  formats = ["webp", "jpeg"],
  sizes = "(max-width: 1200px) 100vw, 1200px"
) => {
  const metadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/images",
    urlPath: "/images",
  });

  const attributes = {
    alt,
    sizes,
    "data-src": dataSrc,
    loading: "lazy",
    decoding: "async",
  };
  if (className !== undefined) {
    attributes.class = className;
  }
  return Image.generateHTML(metadata, attributes);
};

const lightbox = async (
  src,
  alt,
  className = undefined,
  dataSrc = undefined,
  widths = [300, 500, 800],
  formats = ["webp", "jpeg"],
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
) => {
  const metadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/images",
    urlPath: "/images",
  });

  const attributes = {
    alt,
    sizes,
    "data-src": dataSrc,
    loading: "lazy",
    decoding: "async",
  };
  if (className !== undefined) {
    attributes.class = className;
  }
  return Image.generateHTML(metadata, attributes);
};

module.exports = { carousel, lightbox };
