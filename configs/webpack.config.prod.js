const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
    mode: 'production',
    context: path.resolve(__dirname, '../src'),
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash:6].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      modules: false
                  }
              }
          ]
        },
        {
          test: [/\.scss$/],
          use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      modules: true,
                      localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      includePaths: ['./src/styles']
                  }
              }
          ]
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'static/images/[name]-[hash:6].[ext]',
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'static/fonts/[name]-[hash:6].[ext]'
          }
        },
        {
          test: /\.(mp3|aac)$/,
          loader: 'file-loader',
          options: {
            name: 'static/sounds/[name]-[hash:6].[ext]'
          }
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'svg'],
        alias: {
            src: path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            templates: './template/index.html',
            title: 'QST - quit smoking time!',
        }),
    ]
};

module.exports = prodConfig;
