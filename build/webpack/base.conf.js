var path = require('path');
var conf = require('../config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../..', conf.PATHS.base)
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
      'app': path.resolve(__dirname, '../..', conf.PATHS.base)
    }
  },
  resolveLoader: {
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
    },  {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url'
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url'
    }]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
};
