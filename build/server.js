const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.dev.config');
const ip = require('ip');
const open = require('open');


const app = express();

const compiler = webpack(webpackConfig, function(err, a1, a2) {
  if (err) {
    console.log(err);
  }
});


var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

app.use(devMiddleware);
app.use(hotMiddleware);


function listenNewPort(app, port) {
  app.listen(port, (err) => {
    if (err) {
      return console.log(err);
    } else {
      var Url = 'http://' + ip.address() + ':' + port + '/';
      open(Url);
      console.log(Url);
    }
  }).on('error', function(e) {
    if (e.toString().match(/listen EADDRINUSE/)) {
      console.log(port + '端口已被占用，自动监听', port + 1);
      setTimeout(function() {
        listenNewPort(app, port + 1);
      }, 10);
    } else {
      console.log(e);
      process.exit();
    }

  });
}


listenNewPort(app, config.PORTS.DEFAULT_PORT);
