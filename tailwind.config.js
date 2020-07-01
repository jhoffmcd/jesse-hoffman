module.exports = {
  purge: false,
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      body: '#CCC',
      purple: '#b64bcd',
      blue: {
        dark: '#0017bf',
        light: '#0072d4',
      },
      teal: '#00ffbb',
      magenta: '#da5ad2',
      pink: '#dc94ba',
      gold: '#f2d067',
    },
    zIndex: {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
    },
    gradients: (theme) => ({
      retro: {
        type: 'linear',
        colors: [
          '45deg',
          theme('colors.purple'),
          theme('colors.magenta'),
          theme('colors.pink'),
          theme('colors.gold'),
        ],
      },
      'blue-green': {
        type: 'linear',
        colors: [
          '45deg',
          theme('colors.blue.dark'),
          theme('colors.blue.light'),
          theme('colors.teal'),
        ],
      },
    }),
    extend: {
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-plugins/gradients')],
  corePlugins: {
    container: false,
  },
};
