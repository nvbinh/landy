const path = require("path");
const webpack = require("webpack");
var IS_PRODUCTION = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	// favicon: "./public/favicon.ico",
	template: "./public/index.html",
	filename: "index.html",
	inject: "body"
});

var appEntry = {
  app: 'app',
  vendor: [
    'jquery',
    'moment'
  ]
};

module.exports = {
	entry: "./src/index.js",
	devtool: IS_PRODUCTION ? "source-map" : "source-map",
	devServer: {
		//Solved: React Router Error - Cannot GET [Page Name]
		historyApiFallback: true
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "build"),
		publicPath: '/'
	},
	module: {
		rules: [
			{ 
				test: /\.(js|jsx)$/, 
				use: [ 'babel-loader' ], //, 'eslint-loader'
				exclude: /(vendor|node_modules|build)/,
			},
			// Config sass, css with sourceMap
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							minimize: false
							// minimize: IS_PRODUCTION ? true : false
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sprite-loader'
					}],
				}),
				exclude: [ /node_modules/ ]
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
				loader: 'file-loader?name=' + '[name].[ext]'
				// include: path.resolve(__dirname, '/src/images/'),
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules', 'app', 'vendor', 'sass', 'images', 'utils', 'fonts', 'app/../']
	},

	plugins: [ 
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new LodashModuleReplacementPlugin({
			collections: true,
			currying: true, // these are enabled to support lodash/fp/ features
			flattening: true // used by a dependency of react-mentions
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		// new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
	]
};