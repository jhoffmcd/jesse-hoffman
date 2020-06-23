module.exports = {
  purge: false,
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      body: "#CCC",
      purple: {
        dark: "#1a184b",
        medium: "#392758",
        light: "#b64bcd",
      },
      magenta: "#da5ad2",
      pink: "#dc94ba",
      gold: "#f2d067",
    },
    zIndex: {
      "0": 0,
      "1": 1,
      "2": 2,
    },
    gradients: (theme) => ({
      retro: {
        type: "linear",
        colors: [
          "45deg",
          theme("colors.purple.light"),
          theme("colors.magenta"),
          theme("colors.pink"),
          theme("colors.gold"),
        ],
      },
    }),
    extend: {
      inset: {
        '1/2': '50%',
      }
    }
  },
  variants: {},
  plugins: [require("tailwindcss-plugins/gradients")],
  corePlugins: {
    container: false,
  },
};
