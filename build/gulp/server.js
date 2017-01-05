var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('../webpack/dev.conf.js');
var gutil = require('gulp-util');
var webpack = require('webpack');
const ip = require('ip');
var conf = require('../config');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var open = require("open");
var platform = process.env.PLATFORM_ENV || 'mobile';

gulp.task('server', function(callback) {
  gutil.log('Current platform:' + platform);
  runSequence('generateLiveReloadTemplate', 'webpackServer', callback);
});


gulp.task('generateLiveReloadTemplate', function() {
  gulp.watch(conf.PATHS.base + '/index.html',function () {
    runSequence('generateLiveReloadTemplate');
  });
  return gulp.src(conf.PATHS.base + '/index.html')
    .pipe(replace(/<\/body>/, '<script>\n document.write(\'<script src="http://\'+location.hostname+\':' + conf.Server.LIVERELOAD_PORT + '/livereload.js"><\\/script>\');\n</script>\n</body>'))
    .pipe(rename('index_livereload.html'))
    .pipe(gulp.dest('.tmp'));
});



gulp.task('webpackServer', function(callback) {
  var devConfig = Object.create(webpackDevConfig);
  new WebpackDevServer(webpack(devConfig), {
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(conf.Server.PORT, '0.0.0.0', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    var Url = 'http://' + ip.address() + ':' + conf.Server.PORT + '/';

    open(Url);
    gutil.log('[webpack-dev-server]', Url);
    callback();
  });

});
