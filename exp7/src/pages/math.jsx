Math.test.js
import {describe, expect, test} from 'vitest';
import sum from './Math606A';

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
}); 

Math.js
const sum = (a, b) => a + b;
export default sum;  