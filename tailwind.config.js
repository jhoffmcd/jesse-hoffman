module.exports = {
  purge: [],
  theme: {
    colors: {
      purple: {
        dark: "#1a184b",
        medium: "#392758",
        light: "#b64bcd",
      },
      magenta: "#da5ad2",
      pink: "#dc94ba",
      gold: "#f2d067",
    },
    gradients: (theme) => ({
      retro: {
        type: "linear",
        colors: [
          "45deg",
          // theme("colors.purple.dark"),
          // theme("colors.purple.medium"),
          theme("colors.purple.light"),
          theme("colors.magenta"),
          theme("colors.pink"),
          theme("colors.gold"),
        ],
      },
    }),
  },
  variants: {},
  plugins: [require("tailwindcss-plugins/gradients")],
  corePlugins: {
    container: false,
  },
};
