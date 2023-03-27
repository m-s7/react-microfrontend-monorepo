// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'settings',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Settings': './src/pages/index.tsx',
          './Settings/General': './src/pages/general/index.tsx',
        },
        shared: {
          'shared-context': {
            import: 'shared-context',
            requiredVersion:
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              require('../../packages/shared-context/package.json').version,
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
