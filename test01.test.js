import { test, describe } from 'node:test';
import assert from 'node:assert';
import chalk from 'chalk';

describe('test01 - chalk colors and styles', () => {
  test('should display blue text with content preserved', () => {
    const result = chalk.blue('Hello world!');
    assert(typeof result === 'string');
    assert(result.includes('Hello world!'));
  });

  test('should apply bold and red styles together', () => {
    const result = chalk.bold.red('This is an error message!');
    assert(typeof result === 'string');
    assert(result.includes('This is an error message!'));
  });

  test('should apply background colors', () => {
    const result = chalk.bgGreen.black(' Success! ');
    assert(typeof result === 'string');
    assert(result.includes('Success!'));
  });

  test('should nest styles correctly', () => {
    const result = chalk.green('I am a green line ' + chalk.blue.underline('with a blue underlined word') + ' and green again!');
    assert(result.includes('I am a green line'));
    assert(result.includes('with a blue underlined word'));
    assert(result.includes('and green again!'));
  });

  test('should chain multiple style methods', () => {
    const result = chalk.bold.red.underline('Bold Red Underline');
    assert(typeof result === 'string');
    assert(result.includes('Bold Red Underline'));
  });

  test('should handle complex nesting with multiple colors', () => {
    const green = chalk.green('green');
    const blue = chalk.blue('blue');
    const result = `${green} and ${blue}`;
    assert(result.includes('green'));
    assert(result.includes('blue'));
  });

  test('should maintain text content through formatting', () => {
    const text = 'Important message';
    const styled = chalk.bold.bgRed.white(text);
    assert(styled.includes(text));
  });

  test('chalk should support method chaining without throwing', () => {
    assert.doesNotThrow(() => {
      chalk.bold.underline.cyan('Chained styling');
    });
  });

  test('should handle empty strings', () => {
    const result = chalk.blue('');
    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.length >= 0, true);
  });

  test('should handle special characters', () => {
    const result = chalk.red('Error: !@#$%^&*()');
    assert(result.includes('!@#$%^&*()'));
  });

  test('should return a string from single color method', () => {
    const result = chalk.yellow('test');
    assert(typeof result === 'string');
    assert(result.length >= 4); // At least the text length
  });

  test('multiple styled sections can be concatenated', () => {
    const part1 = chalk.red('Red');
    const part2 = chalk.green('Green');
    const result = part1 + ' and ' + part2;
    assert(result.includes('Red'));
    assert(result.includes('Green'));
    assert(result.includes('and'));
  });

  test('should support hex colors', () => {
    const result = chalk.hex('#FF0000')('Bright Red');
    assert(typeof result === 'string');
    assert(result.includes('Bright Red'));
  });

  test('should support rgb colors', () => {
    const result = chalk.rgb(255, 136, 0)('Orange');
    assert(typeof result === 'string');
    assert(result.includes('Orange'));
  });

  test('should support inverse styling', () => {
    const result = chalk.inverse('Inverted');
    assert(typeof result === 'string');
    assert(result.includes('Inverted'));
  });

  test('should support strikethrough text', () => {
    const result = chalk.strikethrough('Struck through');
    assert(typeof result === 'string');
    assert(result.includes('Struck through'));
  });
});
