module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-popcorn":
          "url(https://www.landingkit.com/templates/saasfolio/tailwind/img/hero-drawing-popcorn.png)",
        hero: "url(../assets/hero.png)",
      }),
    },
    textColor: {
      primary: "#16284C",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    fontFamily: {
      sans: ["Prelo", "sans-serif"],
      slab: ['"Prelo Slab"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
