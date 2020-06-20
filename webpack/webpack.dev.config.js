const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");

/**
 * Webpack configuration for developement
 */
module.exports = merge(common, {
	devtool: "inline-source-map",
	mode: "development",
	devServer: {
		contentBase: "./dist",
		hot: true,
	},
});
