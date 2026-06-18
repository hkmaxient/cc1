# cc1-tests

A learning project exploring [Chalk](https://github.com/chalk/chalk) — a Node.js library for styling terminal output with colors and text formatting. Written in TypeScript.

## Project Structure

```
cc1-tests/
├── test01.ts          # Demo script: colors, chaining, nesting
├── test01.test.ts     # Test suite for test01
├── test02.ts          # Demo script: interfaces, union types, optional fields
├── test02.test.ts     # Test suite for test02
├── tsconfig.json      # TypeScript config (NodeNext ESM, strict mode)
├── index.html         # Static profile card (Maxient Inc)
└── package.json
```

## Getting Started

```bash
npm install
```

Run the demo:

```bash
npx tsx test01.ts
```

Run the tests:

```bash
npm test
```

## What's Covered

- **Basic colors** — `chalk.blue()`, `chalk.red()`, `chalk.green()`
- **Style chaining** — `chalk.bold.red()`, `chalk.bgGreen.black()`
- **Nesting** — embedding styled strings inside other styled strings
- **Advanced colors** — `chalk.hex('#FF0000')`, `chalk.rgb(255, 136, 0)`
- **Text decorations** — `underline`, `strikethrough`, `inverse`
- **TypeScript types** — explicit parameter and return type annotations
- **Interfaces** — describing the shape of objects with `interface`
- **Union types** — restricting values to a specific set (e.g. `'red' | 'green' | 'blue'`)
- **Optional fields** — marking fields as optional with `?`

## Key Concept

Chalk wraps strings in ANSI escape codes — the terminal renders them as colors and styles while preserving the underlying text.

```ts
import chalk from 'chalk';

chalk.blue('Hello world!')
chalk.bold.red('Error!')
chalk.bgGreen.black(' Success! ')
chalk.green('Green ' + chalk.blue.underline('blue underlined') + ' green again')

// TypeScript enforces types on your own functions too
function label(color: string, message: string): string {
  return `[${color.toUpperCase()}] ${message}`;
}

// Interfaces describe the shape of objects
interface ChalkStyle {
  label: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'magenta';
  bold?: boolean; // optional field
}

function applyStyle(style: ChalkStyle, message: string): string {
  const colored = chalk[style.color](message);
  return `[${style.label}] ${style.bold ? chalk.bold(colored) : colored}`;
}
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `chalk` | `^5.3.0` | Terminal string styling |
| `typescript` | `^6.0.3` | Type checking |
| `tsx` | `^4.22.4` | Run `.ts` files directly without a compile step |
