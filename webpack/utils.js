const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { getEnv } = require('../../serverUtils');

const hmrPath = '/reactapp/hmr/__webpack_hmr';

const createDevConfig = (config) => ({
  ...config,
  entry: [
    `webpack-hot-middleware/client?reload=true&path=${hmrPath}`,
    ...config.entry,
  ],
  plugins: [
    ...config.plugins,
    new webpack.NamedModulesPlugin(), // This plugin will cause the relative path of the module to be displayed when HMR is enabled. Suggested for use in development.
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
});
const createProdConfig = (config) => ({
  ...config,
  plugins: [...config.plugins, new UglifyJSPlugin()],
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
};
