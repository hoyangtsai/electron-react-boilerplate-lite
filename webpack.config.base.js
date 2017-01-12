/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import validate from 'webpack-validator';
// import {
//   dependencies as externals
// } from './app/package.json';

export default validate({
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'

    }, {
      test: /\.scss$/, 
      loader: 'style!css!sass?root=./app'
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },

  plugins: [],

  // externals: Object.keys(externals || {})
});