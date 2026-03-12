const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-tailwindcss',
    configurePostCss(postcssOptions) {
      console.log('--- Tailwind PostCSS Plugin Running ---');
      // Appends TailwindCSS and Autoprefixer.
      postcssOptions.plugins.unshift(require('tailwindcss')({
        config: path.resolve(__dirname, '../../tailwind.config.js'),
      }));
      postcssOptions.plugins.unshift(require('autoprefixer'));
      return postcssOptions;
    },
  };
};
