'use strict'

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

module.exports =  validate({
  devtool: 'source-map',
  /** source files to read in development */
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  /** build files and name of final file */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'/** Watch the virtual file when watch  */
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  /** Starting babel */
  module:{
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }
})