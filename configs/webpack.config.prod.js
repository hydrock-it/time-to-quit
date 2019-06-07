const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
    mode: 'production',
    context: path.resolve(__dirname, '../src'),
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'static/images/[name].[ext]',
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'static/fonts/[name].[ext]'
          }
        },
        {
          test: /\.(mp3|aac)$/,
          loader: 'file-loader',
          options: {
            name: 'static/sounds/[name].[ext]'
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