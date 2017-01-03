var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('./base.conf.js')
var LiveReloadPlugin = require('webpack-livereload-plugin');
var conf = require('../config');

module.exports = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  debug: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new LiveReloadPlugin({
      port: conf.Server.LIVERELOAD_PORT
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '.tmp/index_livereload.html',
      inject: true
    })
  ]
});
