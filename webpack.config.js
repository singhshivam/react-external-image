const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'externalimage',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};
