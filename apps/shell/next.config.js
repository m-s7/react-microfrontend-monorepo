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
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          admin: 'admin@http://localhost:4301/remoteEntry.js',
          health: 'health@http://localhost:4302/remoteEntry.js',
          settings: 'settings@http://localhost:4303/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          'shared-context': {
            import: 'shared-context',
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            requiredVersion: require('../../packages/shared-context/package.json').version,
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;

// module.exports = {
//   webpack(config, options) {
//     const { webpack } = options;
//     Object.assign(config.experiments, { topLevelAwait: true });
//     if (!options.isServer) {
//       //config.cache=false
//       config.plugins.push(
//         new NextFederationPlugin({
//           name: 'settings',
//           filename: 'static/chunks/remoteEntry.js',
//           remotes: {
//             admin: 'admin@http://localhost:4301/remoteEntry.js',
//             something: 'something@http://localhost:3001/_next/static/chunks/remoteEntry.js',
//           },
//           shared: {
//             'shared-context': {
//               import: 'shared-context',
//               // eslint-disable-next-line @typescript-eslint/no-var-requires
//               requiredVersion: require('../../packages/shared-context/package.json').version,
//             },
//           },
//         })
//       );
//     }
//
//     return config;
//   },
// };
