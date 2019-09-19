const { join } = require('path');

const {
  NODE_ENV = 'development',
} = process.env;

const IS_DEVELOPMENT = NODE_ENV === 'development';

function createTarget({ target }) {
  const IS_SERVER = target === 'server';
  const IS_CLIENT = target === 'client';

  const root = join(__dirname, '../');
  const src = join(root, 'src');
  const dist = join(root, IS_SERVER ? 'dist' : 'dist/assets');

  const name = IS_DEVELOPMENT
    ? '[name]'
    : '[hash:16]';

  return {

    root,
    src,
    dist,
    name,

    isDevelopment: IS_DEVELOPMENT,

    webpack: {
      name: target,
      entry: join(src, `${target}.js`),
      devtool: IS_DEVELOPMENT ? 'cheap-module-eval-source-map' : false,

      mode: NODE_ENV,
      watch: IS_DEVELOPMENT,

      output: {
        path: dist,
        filename: IS_CLIENT
          ? `${name}.bundle.js`
          : 'server.js',
      },

      resolve: {
        modules: [
          'node_modules',
          'src',
        ],
        extensions: ['.js', '.jsx', '.json', 'svg'],
        alias: {
          src,
        },
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                ],
              },
            },
          },
          {
            test: [/\.(css|scss)$/],
            include: [
              src,
            ],
            use: [
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(jpg|jpeg|png|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
          {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
          {
            test: /\.(mp3|aac)$/,
            loader: 'file-loader',
            options: {
              name: 'assets/sounds/[name].[ext]',
            },
          },
        ],
      },
    },
  };
}

module.exports = {
  createTarget,
};
