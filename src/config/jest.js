const es6Modules = require('config/es6Modules');


module.exports = (name) => ({
  setupTestFrameworkScriptFile: '<rootDir>/packages/testing/test-bundler.js',
  setupFiles: ['<rootDir>/packages/testing/shim.js', '<rootDir>/packages/testing/enzyme-setup.js'],
  transformIgnorePatterns: [
    `node_modules/(?!(${es6Modules.join('|')}))`,
  ],
  rootDir: '../../',
  testMatch: [`<rootDir>/packages/${name}/**/*.test.js`],
});
