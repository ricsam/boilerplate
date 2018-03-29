const express = require('express');
const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const cors = require('cors');
const { hmrPath, getWebpackConfig } = require('./utils');

const { getDistFolder } = require('../../serverUtils');

const fs = new MemoryFS();

console.log('Initializing server application...');

const baseWebpackConfig = require('./webpack.config');

const webpackConfig = getWebpackConfig(baseWebpackConfig);
const diskPublicFolder = getDistFolder();


const compiler = webpack(webpackConfig);
compiler.outputFileSystem = fs;
if (process.env.NODE_ENV === 'development') {
  const app = express();
  app.use(cors());
  app.use(express.static(diskPublicFolder));
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

  app.listen(3001);
}
