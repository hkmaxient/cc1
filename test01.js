import chalk from 'chalk';

// Simple colors
console.log(chalk.blue('Hello world!'));

// Chaining styles (Bold + Red text)
console.log(chalk.bold.red('This is an error message!'));

// Background colors
console.log(chalk.bgGreen.black(' Success! '));

// Nesting styles
console.log(chalk.green('I am a green line ' + chalk.blue.underline('with a blue underlined word') + ' and green again!'));
