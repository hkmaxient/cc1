import chalk from 'chalk';

// TypeScript knows chalk's exact API — if you mistype a method name,
// it will error before you even run the file.

// Simple colors
console.log(chalk.blue('Hello world!'));

// Chaining styles (Bold + Red text)
console.log(chalk.bold.red('This is an error message!'));

// Background colors
console.log(chalk.bgGreen.black(' Success! '));

// Nesting styles
console.log(
  chalk.green(
    'I am a green line ' +
    chalk.blue.underline('with a blue underlined word') +
    ' and green again!'
  )
);

// TypeScript lets you name your intent explicitly.
// This function only accepts strings — TypeScript enforces it.
function label(color: string, message: string): string {
  return `[${color.toUpperCase()}] ${message}`;
}

console.log(chalk.cyan(label('info', 'TypeScript is running!')));
