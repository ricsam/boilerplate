const path = require('path');
const webpack = require('webpack');

const es6Modules = require('config/es6Modules');

const includes = es6Modules.map(
  (module) => new RegExp(`${module}(?!.*node_modules)`)
);

module.exports = {
  entry: [
    path.join(__dirname, '../app/app.js'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: 'main.js',
    chunkFilename: 'reactapp.[chunkhash].js',
    publicPath: '/reactapp/',
    path: '/', /* memory fs path */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: (modulePath) => {
          if (includes.filter((regexp) => regexp.test(modulePath)).length > 0) {
            return true;
          }
          if (modulePath.match(/node_modules/)) {
            return false;
          }
          return true;
        },
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: ['styled-components'],
            presets: [
              [
                'env',
                {
                  modules: false,
                },
              ],
              'react',
              'stage-0',
            ],
            env: {
              production: {
                only: ['app', ...es6Modules],
                plugins: [
                  'transform-react-remove-prop-types',
                  'transform-react-constant-elements',
                  'transform-react-inline-elements',
                ],
              },
              test: {
                plugins: [
                  'transform-es2015-modules-commonjs',
                  'dynamic-import-node',
                ],
              },
            },
          },
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
