import validate from 'webpack-validator';
import path from 'path';
import { dependencies as externals } from './app/package.json';

export default validate({
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    libraryTarget: 'commonjs2'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },

  plugins: [],

  externals: Object.keys(externals || {})
})
