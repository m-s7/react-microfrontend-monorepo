const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: ['./src/main.tsx'],
	module: {
		rules: require('./webpack.rules')
	},
	output: {
		publicPath: '/', //Important: HMR will break on deep route navigation without publicPath
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			favicon: path.resolve(__dirname, './public/favicon.ico'),
			inject: true,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[name].[chunkhash].chunk.css',
		}),
		new ReactRefreshPlugin(),
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	devtool: 'eval',
	devServer: {
		open: true,
		hot: true,
		port: 4300,
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
	},
	performance: {
		hints: false,
	},
}
