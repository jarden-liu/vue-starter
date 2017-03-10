const ora = require('ora');
const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const getResolvePath = require('./utils').getResolvePath;
const webpackConfig = require('./webpack.prod.config');
const shell = require('shelljs');

var spinner = ora('building for production(线上版本编译中)...');
spinner.start();
shell.rm('-rf', getResolvePath(config.PATHS.output));

const app = express();

webpack(webpackConfig, function(err) {
  spinner.stop();
});
