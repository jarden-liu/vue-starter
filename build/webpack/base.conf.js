var path = require('path');
var conf = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var platform = process.env.PLATFORM_ENV || 'mobile';

console.log(path.resolve(__dirname, '../..', conf.PATHS.base, 'assets'));
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../..', conf.PATHS.base, platform)
  },
  output: {
    path: path.resolve(__dirname, '../..', conf.PATHS.output),
    filename: conf.BUILD.outputFileName,
    chunkFilename: conf.BUILD.outputChunkFilename,
    hash: conf.PATHS.filehash
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [
      path.join(__dirname, '../..', conf.PATHS.nodeModules),
      path.join(__dirname, '../..', conf.PATHS.bowerComponents)
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'core': path.resolve(__dirname, '../..', conf.PATHS.base, 'core'),
      'app': path.resolve(__dirname, '../..', conf.PATHS.base),
      'assets': path.resolve(__dirname, '../..', conf.PATHS.base, 'assets')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, '../..', conf.PATHS.nodeModules),
    fallback: [
      path.join(__dirname, '../..', conf.PATHS.nodeModules),
      path.join(__dirname, '../..', conf.PATHS.bowerComponents)
    ]
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: new RegExp(conf.PATHS.base),
      exclude: new RegExp(conf.PATHS.nodeModules)
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: new RegExp(conf.PATHS.base),
      exclude: new RegExp(conf.PATHS.nodeModules)
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: new RegExp(conf.PATHS.base),
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {

      test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  devtool: '#eval-source-map',
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
};
