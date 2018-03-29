const Rx = require('rxjs/Rx');
const path = require('path');
const MemoryFS = require('memory-fs');
const webpack = require('webpack');
const { getWebpackConfig } = require('./utils');
const baseWebpackConfig = require('./webpack.config');

const {
  memReaddir$,
  memReadFile$,
  getDistFolder,
  fsWriteFile$,
} = require('../../serverUtils');


const webpackConfig = getWebpackConfig(baseWebpackConfig);

const compiler = webpack(webpackConfig);
const diskPublicFolder = getDistFolder();
const fs = new MemoryFS();

compiler.outputFileSystem = fs;

function writeToDisk$(observable) {
  return observable.concatMap(() =>
    memReaddir$(fs)('/')
      .concatMap((fname) =>
        memReadFile$(fs)(path.join('/', fname)).map((data) => ({
          fpath: path.join(
            diskPublicFolder,
            webpackConfig.output.publicPath,
            fname
          ),
          data,
        }))
      )
      .do(({ fpath }) => console.log(`Saving: ${fpath}`))
      .concatMap(({ fpath, data }) => fsWriteFile$(fpath, data))
  );
}

Rx.Observable.bindNodeCallback(compiler.run.bind(compiler))()
  .do((err, stats) => {
    // console.log((err.stack || err).toString());
    // const info = stats.toJson();
    // if (stats.hasErrors()) {
    //   console.error(info.errors);
    // }
    // if (stats.hasWarnings()) {
    //   console.warn(info.warnings);
    // }
  })
  .pipe(writeToDisk$)
  .last()
  .subscribe(() => console.log('done'), (error) => console.log(error));
