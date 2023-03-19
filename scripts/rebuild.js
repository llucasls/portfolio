#!/usr/bin/env node
const cp = require('child_process');

const stdio = 'inherit';
const build = cp.spawn('node_modules/.bin/next', ['build'], { stdio });

build.on('close', () => {
  console.log('');
});
