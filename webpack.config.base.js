import validate from 'webpack-validator';
import path from 'path';

export default validate({
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?root=./app'
      }
    ]
  },

})
