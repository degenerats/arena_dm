var path = require('path');
module.exports = {
  entry: './src/modules/main.js',
  output: {
      path: __dirname,
      filename: 'dist/game.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|\.min.js$)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      }
    }]
  }
};
