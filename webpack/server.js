const express = require('express');
const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { hmrPath, getWebpackConfig } = require('./utils');

const fs = new MemoryFS();

console.log('Initializing server application...');

const baseWebpackConfig = require('./webpack.config');

const webpackConfig = getWebpackConfig(baseWebpackConfig);


const compiler = webpack(webpackConfig);
compiler.outputFileSystem = fs;
const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    // webpack-dev-middleware options
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(
  webpackHotMiddleware(compiler, {
    path: hmrPath,
  })
);


console.log('Server listening on port 3001');
app.listen(3001);
