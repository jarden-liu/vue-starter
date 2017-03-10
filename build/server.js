const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.dev.config');

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


app.listen(config.PORTS.DEFAULT_PORT, (err) => {
  if (err) return console.log(err)
  console.log('http://localhost/' + config.PORTS.DEFAULT_PORT)
});
