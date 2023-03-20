// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('../../packages/webpack/app/webpack.rules'),
  },
  output: {
    publicPath: '/', //Important: HMR will break on deep route navigation without publicPath
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [...require('../../packages/webpack/app/webpack.plugins'), new ReactRefreshPlugin()],
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
};
