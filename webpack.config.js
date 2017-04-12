const path = require('path');
const webpack = require('webpack');
//const less = require('less');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
	
	context: path.resolve(__dirname,'./src'),
	entry: {
		 'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
		main: './main.js',
	},
	output:{
		//context: path.resolve('./'),
		path: path.resolve(__dirname,'./build'),
		filename: 'bundle.js',
	},
	module:{
		loaders:[

		//{test:/\.css$/,loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader',loader: 'css-loader'})},
		{test:/\.less$/i, loader: extractLESS.extract(['css-loader','less-loader'])}
		]
	},
	plugins:[
	    //new ExtractTextPlugin("styles.css"),
	    extractCSS,
	    extractLESS
	]
};