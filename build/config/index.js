var path = require('path');


module.exports.PATHS = {
    base: 'app',

    output: 'dist',
    nodeModules: 'node_modules',
    bowerComponents: 'bower_components'
};



module.exports.BUILD = {
    filehash: true,
    outputFileName: '[name].[chunkhash].js',
    outputChunkFilename: '[chunkhash].js'

};
