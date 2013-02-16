module.exports = {
	entry: "./app.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jade$/, loader: "jade" }
		]
	}
}