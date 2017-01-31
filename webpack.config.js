var path = require('path');
module.exports = {
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['doctolib']
        },
      }],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  }
};
