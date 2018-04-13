const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Rx = require('rxjs/Rx');
const path = require('path');

const memReaddir$ = (fs) => (...args) =>
  Rx.Observable.bindNodeCallback(fs.readdir.bind(fs))(...args).concatAll();

const readFile$ = (fs) => (...args) =>
  Rx.Observable.bindNodeCallback(fs.readFile.bind(fs))(...args);

const getEnv = () =>
  process.env && process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

const hmrPath = '/__webpack_hmr';

const htmlPath = path.join(__dirname, '../app/index.html');

const createDevConfig = (config) => ({
  ...config,
  entry: [
    `webpack-hot-middleware/client?reload=true&path=${hmrPath}`,
    ...config.entry,
  ],
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
    }),
  ],
  devtool: 'eval-source-map',
  mode: 'development',
});
const createProdConfig = (config) => ({
  ...config,
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: htmlPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true,
  },
  mode: 'production',
});

const getWebpackConfig = (config) => {
  let webpackConfig;
  if (getEnv() === 'development') {
    webpackConfig = createDevConfig(config);
  } else {
    webpackConfig = createProdConfig(config);
  }
  return webpackConfig;
};

module.exports = {
  getWebpackConfig,
  hmrPath,
  memReaddir$,
  readFile$,
  getEnv,
};
