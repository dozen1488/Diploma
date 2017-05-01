const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
let express = require('express');

let app = express();
let port = 3000;
let compiler = webpack(config);

app.use(express.static(__dirname));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});