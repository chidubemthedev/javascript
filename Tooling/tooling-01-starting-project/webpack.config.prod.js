const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/app.js",
	output: {
		filename: "[contenthash].js",
		path: path.resolve(__dirname, "assets/scripts"),
		publicPath: "assets/scripts/"
	},
	devtool: "eval",
    // plugins: [
	// 	new CleanPlugin.CleanWebpackPlugin()
	// ]
};
