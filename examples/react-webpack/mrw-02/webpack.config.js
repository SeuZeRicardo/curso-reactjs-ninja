'use strict'

const path = require('path')

module.exports = {
  devtool: 'source-map',
  /** source files to read in development */
  entry: path.join(__dirname, 'src', 'index'),
  /** build files and name of final file */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'/** Watch the virtual file when watch  */
  },

  /** Starting babel */
  module:{
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }
}
 