var path = require('path');
module.exports = {
  entry: {
    logged: './app/assets/javascripts/epics/index',
    unlogged: './app/assets/javascripts/index',
  },

  output: {
    path: path.join(__dirname, 'public/assets/'),
     filename: "[name].js"
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
