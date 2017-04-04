const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js',
  output: {
    path: './assets',
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
