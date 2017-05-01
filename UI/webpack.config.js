const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
      loaders: [{
          loader: 'babel-loader',
          include: [
              path.resolve(__dirname, "src")
          ],
          test: /\.jsx?$/,
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'stage-0', 'react']
          }
      }]
  },
  watch: true
}