module.exports = {
	plugins: [
		"@babel/plugin-proposal-nullish-coalescing-operator",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-transform-async-to-generator",
		"babel-plugin-syntax-trailing-function-commas",
		"@babel/plugin-proposal-export-default-from",
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-transform-react-display-name",
	],
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					esmodules: true,
				},
			},
		],
		[
			"@babel/preset-react",
			{
				development: process.env.BABEL_ENV === "development",
			},
		],
	],
};
