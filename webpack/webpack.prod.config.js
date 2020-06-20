const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");

/**
 * Webpack configuration for production
 */
module.exports = merge(common, {
	mode: "production",
});
