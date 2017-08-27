/* eslint-disable */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';

/* eslint-disable no-console */

const port = 8080;
const server = express();
const compiledConfig = webpack(config);
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

server.use(devMiddleware(compiledConfig, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

server.use(hotMiddleware(compiledConfig));

// serve index.html for all requests
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open browser to local host when successful
    open(`http://localhost:${port}`);
    console.log('App started in dev mode...'.green);
  }
});