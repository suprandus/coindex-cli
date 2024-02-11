const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check price of coins')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'bitcoin,ethereum,tether' // coin or token name not symbol;
  )
  .option('--cur <currency>', 'Change the currency', 'usd')
  .action(cmd => check.price(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
