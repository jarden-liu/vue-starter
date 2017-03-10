const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const getResolvePath = require('./utils').getResolvePath;
const getJoinPath = require('./utils').getJoinPath;
const autoprefixer = require('autoprefixer')({
  browsers: ['iOS >= 7', 'Android >= 4.1']
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
//webpack的html插件

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extract = new ExtractTextPlugin('css/[name].[hash].css');
const cssLoader = extract.extract("css");
const sassLoader = extract.extract("css!sass");
const lessLoader = extract.extract("css!less");
//ExtracTextPlugin插件作用是，让css不加载在html的head，而是把css抽离出来，保存成独立的文件，用外联的形式加载到html中
module.exports = {
  entry: {
    app: ['babel-polyfill', getResolvePath(config.PATHS.base)] // 应用入口
  },
  output: {
    path: getResolvePath(config.PATHS.output), //build完之后输出的文件路径
    filename: config.FILE_FORMAT.outputFileName, //输出的文件名
    chunkFilename: config.FILE_FORMAT.outputChunkFilename, //块文件名的输出格式
    hash: config.FILE_FORMAT.filehash //是否hash文件
  },
  resolve: {
    root: getJoinPath('node_modules'), //import 模块的默认目录
    extensions: ['', '.js', '.vue', '.json'], //  import这些后缀的文件不需要加后缀
    fallback: [ //实在找不到import，就会到这个路径下面去找
      getJoinPath('node_modules'),
      getJoinPath('bower_components')
    ],
    alias: config.MODULE_ALIAS //module import时候的别名   如设置'vue$': 'vue/dist/vue.common.js'。import vue from 'vue'就相当于 import vue from 'vue/dist/vue.common.js'
  },
  resolveLoader: {
    root: getJoinPath('node_modules'), //loader 模块的默认目录
    fallback: [ //实在找不到import，就会到这个路径下面去找
      getJoinPath('node_modules'),
      getJoinPath('bower_components')
    ],

  },
  plugins: [
    extract
  ],
  vue: {
    loaders: {
      css: extract.extract("css"),
      sass: sassLoader
    }
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: new RegExp(config.PATHS.base),
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: new RegExp(config.PATHS.base),
      exclude: /node_modules/
    }],
    loaders: [ //文件加载器
      {
        test: /\.vue$/, //test，识别文件,多使用正则表达式，也可以使用绝对文件名称
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: new RegExp(config.PATHS.base), //load包括new RegExp(config.PATHS.base)目录下的
        exclude: /node_modules/ //不load包括node_modules目录下的
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: cssLoader,
      },
      {
        test: /\.scss$/,
        loader: sassLoader,
      },
      {
        test: /\.less$/,
        loader: lessLoader,
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'url',
        query: {
          limit: 10000, //低于10kb的直接变成base64
          name: 'assets/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.((eot|woff|ttf|svg)[\?]?.*)$/,
        loader: 'url',
        query: {
          name: 'assets/[name].[ext]?[hash]'
        }
      }

    ]
  }
};
