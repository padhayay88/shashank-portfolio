#!/usr/bin/env node
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(cmd, args, opts = {}) {
  const p = spawn(cmd, args, { stdio: 'inherit', shell: true, ...opts });
  p.on('exit', (code) => process.exit(code));
}

function help() {
  console.log(`
portfolio CLI

Usage:
  portfolio dev            Run development server (npm run dev)
  portfolio build          Run production build (npm run build)
  portfolio start          Start production server (npm run start)
  portfolio vercel:deploy  Deploy using Vercel CLI (vercel --prod)
  portfolio info           Show project info (package.json)
  portfolio help           Show this help
`);
}

function showInfo() {
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.error('package.json not found in the current directory');
    process.exit(1);
  }
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  console.log(`${pkg.name || 'project'}@${pkg.version || '0.0.0'}`);
  console.log('scripts:');
  Object.keys(pkg.scripts || {}).forEach((k) => console.log(`  - ${k}: ${pkg.scripts[k]}`));
}

async function main() {
  const argv = process.argv.slice(2);
  const cmd = argv[0];

  switch (cmd) {
    case 'dev':
      return runCommand('npm', ['run', 'dev']);
    case 'build':
      return runCommand('npm', ['run', 'build']);
    case 'start':
      return runCommand('npm', ['run', 'start']);
    case 'vercel:deploy':
      console.log('Running `vercel --prod` (requires Vercel CLI and login)');
      return runCommand('vercel', ['--prod']);
    case 'info':
      return showInfo();
    case 'help':
    case undefined:
      return help();
    default:
      console.error(`Unknown command: ${cmd}`);
      help();
      process.exit(2);
  }
}

main();
