const es6Modules = require('config/es6Modules');


module.exports = (name) => ({
  setupTestFrameworkScriptFile: '<rootDir>/src/testing/test-bundler.js',
  setupFiles: ['<rootDir>/src/testing/shim.js', '<rootDir>/src/testing/enzyme-setup.js'],
  transformIgnorePatterns: [
    `node_modules/(?!(${es6Modules.join('|')}))`,
  ],
  rootDir: '../../',
  testMatch: [`<rootDir>/src/${name}/**/*.test.js`],
});
