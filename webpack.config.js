var path = require('path');
module.exports = {
  entry: [
    './app/assets/javascripts/epics/index'
  ],

  output: {
    path: path.join(__dirname, 'public/assets/'),
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
    modules: [path.join(__dirname, './app/assets/javascripts/epics/'), 'node_modules']
  }
};
