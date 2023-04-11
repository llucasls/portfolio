const cp = require('child_process');
const fs = require('fs');

let buildProc;
const build = () =>
  cp.spawn('node_modules/.bin/next', ['build'], { stdio: 'inherit' });
const start = () =>
  cp.spawn('node_modules/.bin/next', ['start'], { stdio: 'inherit' });
const dev = () =>
  cp.spawn('node_modules/.bin/next', ['dev'], { stdio: 'inherit' });

function runBuild() {
  buildProc = build();
}

function runStart() {
  buildProc.on('close', () => {
    console.log('\n');
    start();
  });
}

function runNodemon() {
  const nodemon = 'node_modules/.bin/nodemon';

  cp.spawn(nodemon, ["--on-change-only"], {
    detached: false,
    cwd: '.',
    stdio: 'inherit',
  });
}

function runDev() {
  dev();
}

task('build', runBuild);
task('start', ['build'], runStart);
task('default', runDev);
