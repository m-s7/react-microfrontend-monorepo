const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'settings',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './Settings': './src/pages/index.tsx'
          },
          shared: {
            'shared-context': {
              import: 'shared-context',
              requiredVersion: require('../../packages/shared-context/package.json').version
            }
          }
        })
      );
    }

    return config;
  }
};