#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://www.coingecko.com/en/api')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);
