// eslint-disable-next-line @typescript-eslint/no-var-requires
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('../../packages/webpack/app/webpack.rules'),
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    ...require('../../packages/webpack/app/webpack.plugins'),
    new ModuleFederationPlugin({
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
        './Admin': './src/app',
      },
      shared: {
        react: { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
        'react-dom': { singleton: true, strictVersion: true, requiredVersion: '18.2.0' },
        'styled-components': { singleton: true, strictVersion: true, requiredVersion: '5.3.9' },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // optimization: {
  //   minimize: true,
  //   sideEffects: true,
  //   concatenateModules: true,
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: 10,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendors',
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
};
