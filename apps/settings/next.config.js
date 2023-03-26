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
            react: { singleton: true, requiredVersion: false },
            'react/': { singleton: true, requiredVersion: false },
            'react-dom': { singleton: true, requiredVersion: false },
            'styled-jsx': { requiredVersion: false, singleton: true },
            'styled-jsx/style': { requiredVersion: false, singleton: true },
            'next/link': { requiredVersion: false, singleton: true },
            'next/router': { requiredVersion: false, singleton: true },
            'next/script': { requiredVersion: false, singleton: true },
            'next/dynamic': { requiredVersion: false, singleton: true },
            'next/head': { requiredVersion: false, singleton: true },
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