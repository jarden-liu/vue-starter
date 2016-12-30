var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('../webpack/dev.conf.js');
var gutil = require('gulp-util');
var webpack = require('webpack');
const ip = require('ip');


gulp.task('server', function(callback) {
  var devConfig = Object.create(webpackDevConfig);

  new WebpackDevServer(webpack(devConfig), {
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(8080, '0.0.0.0', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://' + ip.address() + ':8080/webpack-dev-server');
  });

});
