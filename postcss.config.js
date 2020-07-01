const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./tailwind.config.js'),
    ...(!dev ? [purgeCSS] : []),
  ],
};
