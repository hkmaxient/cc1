import { test, describe } from 'node:test';
import assert from 'node:assert';
import chalk from 'chalk';

interface ChalkStyle {
  label: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'cyan' | 'magenta';
  bold?: boolean;
}

function applyStyle(style: ChalkStyle, message: string): string {
  const colored = chalk[style.color](message);
  const formatted = style.bold ? chalk.bold(colored) : colored;
  return `[${style.label}] ${formatted}`;
}

describe('test02 - ChalkStyle interface', () => {
  test('output includes the label', () => {
    const style: ChalkStyle = { label: 'INFO', color: 'cyan' };
    const result = applyStyle(style, 'hello');
    assert(result.includes('[INFO]'));
  });

  test('output includes the message', () => {
    const style: ChalkStyle = { label: 'INFO', color: 'cyan' };
    const result = applyStyle(style, 'hello');
    assert(result.includes('hello'));
  });

  test('optional bold field can be omitted', () => {
    const style: ChalkStyle = { label: 'OK', color: 'green' };
    assert.doesNotThrow(() => applyStyle(style, 'test'));
  });

  test('optional bold field can be set to true', () => {
    const style: ChalkStyle = { label: 'ERR', color: 'red', bold: true };
    const result = applyStyle(style, 'oops');
    assert(result.includes('oops'));
  });

  test('all allowed colors are accepted', () => {
    const colors: ChalkStyle['color'][] = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta'];
    for (const color of colors) {
      const style: ChalkStyle = { label: 'X', color };
      assert.doesNotThrow(() => applyStyle(style, 'test'));
    }
  });

  test('returns a string', () => {
    const style: ChalkStyle = { label: 'TEST', color: 'blue' };
    const result = applyStyle(style, 'msg');
    assert.strictEqual(typeof result, 'string');
  });
});
