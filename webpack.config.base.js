import path from 'path';
import validate from 'webpack-validator';

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
      }
    ]
  }
})
