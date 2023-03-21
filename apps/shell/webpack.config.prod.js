// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
