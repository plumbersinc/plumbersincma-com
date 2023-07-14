module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff8ff",
          100: "#daefff",
          200: "#bde4ff",
          300: "#90d3ff",
          400: "#5cbafe",
          500: "#369bfb",
          600: "#207cf0",
          700: "#1866dd",
          800: "#1a52b3",
          900: "#1b488d",
          950: "#1a3668",
        },
        secondary: {
          50: "#fff6ed",
          100: "#ffead4",
          200: "#ffd1a8",
          300: "#ffb071",
          400: "#ff8338",
          500: "#fe6111",
          600: "#ef4507",
          700: "#c63108",
          800: "#9d280f",
          900: "#8a2711",
          950: "#440e06",
        },
      },
      fontFamily: {
        serif: ["Roboto Slab", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      dropShadow: {
        text: "4px 2px 1px rgba(0, 0, 0, 1)",
      },
      spacing: {
        128: "32rem",
        "glide-control": "calc(50% - 1.5rem)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
};
