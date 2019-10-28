import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import BabiliPlugin from 'babili-webpack-plugin';
import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: ['babel-polyfill', './src/index'],

  output: {
    path: path.join(__dirname, 'app')
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        )
      }
    ]
  },

  target: 'electron-renderer',

  plugins: [
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // https://github.com/webpack/webpack/issues/864
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // new BabiliPlugin(),

    new ExtractTextPlugin('app.css', { allChunks: true }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: false
    })
  ]
})
