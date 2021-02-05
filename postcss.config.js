const cssnano = require("cssnano");
const postcssNested = require('postcss-nested'),
const postcssPresetEnv = require("postcss-preset-env");
const stylelint = require("stylelint");
const postcssBemLinter = require("postcss-bem-linter"); 

module.exports = {
  plugins: [
    stylelint(),
    postcssBemLinter(),

    postcssNested(),
    postcssPresetEnv(),
    cssnano(),
  ],
};
