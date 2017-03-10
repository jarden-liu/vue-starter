const path = require('path');

module.exports = {
  getResolvePath: function(rootPath) {
    return path.resolve(__dirname, '..', rootPath);
  },
  getJoinPath: function(rootPath) {
    return path.join(__dirname, '..', rootPath);
  }
};
