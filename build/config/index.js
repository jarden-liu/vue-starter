// var path = require('path');

module.exports.PATHS = {
  base: 'app',
  output: 'dist',
  nodeModules: 'node_modules',
  bowerComponents: 'bower_components'
};

module.exports.BUILD = {
  filehash: true,
  outputFileName: '[name].[hash].js',
  outputChunkFilename: '[hash].js'
};



module.exports.Server = {
  PORT: '8080',
  LIVERELOAD_PORT: '35729'
};
