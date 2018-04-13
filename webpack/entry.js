const { spawn } = require('child_process');
const path = require('path');

spawn('node', [path.join(__dirname, 'server.js')], {
  stdio: 'inherit',
  cwd: __dirname,
});
