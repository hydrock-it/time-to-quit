const nodeExternals = require('webpack-node-externals');

const config = require('./config').createTarget(
  { target: 'server' },
);

module.exports = {
  ...config.webpack,

  target: 'node',

  externals: [nodeExternals()],

  node: {
    __dirname: false,
  },
};
