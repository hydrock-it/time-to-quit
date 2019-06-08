const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
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
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    compress: true,
    port: 9001
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './templates/index.html',
      title: 'QST - quit smoking time!',
    })
  ]
}

module.exports = devConfig;
