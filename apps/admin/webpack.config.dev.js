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
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
        './Admin': './src/entrypoint',
      },
      shared: {
        react: { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
        'styled-components': { singleton: true, strictVersion: true, requiredVersion: '5.3.9' },
        'shared-context': {
          import: 'shared-context',
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          requiredVersion: require('../../packages/shared-context/package.json').version,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    open: false,
    hot: true,
    port: 4301,
    historyApiFallback: true,
  },
};
