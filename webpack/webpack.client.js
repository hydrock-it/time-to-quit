const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./config').createTarget(
  { target: 'client' },
);

module.exports = {

  ...config.webpack,

  module: {
    rules: [
      ...config.webpack.module.rules,
      {
        test: [/\.(css|scss)$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/assets/',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${config.name}.bundle.css`,
      chunkFilename: '[id].css',
    }),

    new HtmlWebpackPlugin({
      filename: '../index.ejs',
      title: 'Custom template',
      template: path.join(config.src, 'views/index.ejs'),
      content: '<%- content %>',
      preloadState: '<%- preloadState %>',
      inject: true,
    }),

    new CleanWebpackPlugin(),
  ],
};
