import webpack from 'webpack';
import validate from 'webpack-validator';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default validate(merge(baseConfig, {
  devtool: 'source-map',

  entry: ['babel-polyfill', './src/electron.main'],

  output: {
    path: `${__dirname}/app`,
    filename: 'main.js'
  },

  target: 'electron',

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  }
}))
