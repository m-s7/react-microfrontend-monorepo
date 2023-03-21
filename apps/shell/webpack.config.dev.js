// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('../../packages/webpack/app/webpack.rules'),
  },
  output: {
    publicPath: 'auto', //Important: HMR will break on deep route navigation without publicPath
  },
  plugins: [
    ...require('../../packages/webpack/app/webpack.plugins'),
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        admin: 'admin@http://localhost:4301/remoteEntry.js',
        health: 'health@http://localhost:4302/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
      },
    }),
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
    splitChunks: false,
    runtimeChunk: 'single',
  },
  performance: {
    hints: false,
  },
};
