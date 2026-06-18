import chalk from 'chalk';

// An interface describes the shape of an object.
// TypeScript will enforce that anything typed as ChalkStyle has exactly these fields.
interface ChalkStyle {
  label: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'magenta'; // union type: only these values allowed
  bold?: boolean; // the ? makes this field optional
}

// This function only accepts objects that match ChalkStyle — nothing else compiles.
function applyStyle(style: ChalkStyle, message: string): string {
  const colored = chalk[style.color](message);
  const formatted = style.bold ? chalk.bold(colored) : colored;
  return `[${style.label}] ${formatted}`;
}

// These object literals must satisfy the ChalkStyle interface.
// Try changing 'red' to 'purple' — TypeScript will refuse it.
const errorStyle: ChalkStyle  = { label: 'ERROR',   color: 'red',    bold: true };
const successStyle: ChalkStyle = { label: 'SUCCESS', color: 'green' };
const infoStyle: ChalkStyle   = { label: 'INFO',    color: 'cyan' };

console.log(applyStyle(errorStyle,   'Something went wrong'));
console.log(applyStyle(successStyle, 'Operation completed'));
console.log(applyStyle(infoStyle,    'Server started on port 3000'));
