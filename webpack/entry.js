const { spawn } = require('child_process');
const path = require('path');

if (process.env.ASSET_ACTION === 'build') {
  spawn('node', [path.join(__dirname, 'builder.js')], {
    stdio: 'inherit',
    cwd: __dirname,
  });
} else if (!process.env.ASSET_ACTION) {
  spawn('node', [path.join(__dirname, 'server.js')], {
    stdio: 'inherit',
    cwd: __dirname,
  });
}
