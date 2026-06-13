# cc1-tests

A learning project exploring [Chalk](https://github.com/chalk/chalk) — a Node.js library for styling terminal output with colors and text formatting.

## Project Structure

```
cc1-tests/
├── test01.js          # Demo script: colors, chaining, nesting
├── test01.test.js     # Test suite (Node built-in test runner)
├── index.html         # Static profile card (Maxient Inc)
└── package.json
```

## Getting Started

```bash
npm install
```

Run the demo:

```bash
node test01.js
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

## Key Concept

Chalk wraps strings in ANSI escape codes — the terminal renders them as colors and styles while preserving the underlying text.

```js
import chalk from 'chalk';

chalk.blue('Hello world!')
chalk.bold.red('Error!')
chalk.bgGreen.black(' Success! ')
chalk.green('Green ' + chalk.blue.underline('blue underlined') + ' green again')
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `chalk` | `^5.3.0` | Terminal string styling |
