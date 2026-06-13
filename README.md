# cc1-tests

A test suite exploring [Chalk](https://github.com/chalk/chalk) — a Node.js library for styling terminal output with colors and text formatting.

## What's Here

- `test01.js` — demo script showing Chalk's color/style API in action
- `test01.test.js` — test suite covering colors, style chaining, nesting, and special cases
- `index.html` — static profile card page (Maxient Inc)

## Getting Started

Install dependencies:

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
# or
node --test test01.test.js
```

## What You'll Learn

This project covers core Chalk concepts:

- **Basic colors** — `chalk.blue()`, `chalk.red()`, `chalk.green()`
- **Style chaining** — `chalk.bold.red()`, `chalk.bgGreen.black()`
- **Nesting** — embedding styled strings inside other styled strings
- **Advanced colors** — `chalk.hex('#FF0000')`, `chalk.rgb(255, 136, 0)`
- **Text decorations** — `underline`, `strikethrough`, `inverse`

## Key Concept

Chalk methods return strings with embedded ANSI escape codes — the terminal interprets these codes as colors and styles. The actual text content is always preserved inside the styled string.

```js
import chalk from 'chalk';

chalk.blue('Hello world!')           // blue text
chalk.bold.red('Error!')             // bold + red
chalk.bgGreen.black(' Success! ')   // black text on green background
```

## Dependencies

| Package | Purpose |
|---------|---------|
| `chalk` | Terminal string styling |
