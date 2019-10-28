import path from 'path';

export default {
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
        loader: 'json'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
}
