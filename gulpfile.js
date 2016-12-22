var fs = require('fs');
var gulp = require('gulp');



//require gulp文件夹下面的脚本文件
fs.readdirSync('./build/gulp').filter(function(file) {
    return (/\.js$/i).test(file);
}).map(function(file) {
    require('./build/gulp/' + file);
});



//设置默认启动server
gulp.task('default', function() {
    gulp.start('server');
});
