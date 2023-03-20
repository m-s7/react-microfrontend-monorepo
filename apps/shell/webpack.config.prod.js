const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: ['./src/main.tsx'],
	module: {
		rules: require('./webpack.rules')
	},
	output: {
		publicPath: '/', //Important: HMR will break on deep route navigation without publicPath
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		clean: true,
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
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	optimization: {
		minimize: true,
		sideEffects: true,
		concatenateModules: true,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 10,
			minSize: 0,
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
				},
			},
		},
	},
	performance: {
		maxEntrypointSize: 1024000,
		maxAssetSize: 1024000,
	},
}
