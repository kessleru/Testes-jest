import { soma, subtrai } from '../../src/calculadora.js';

// Describe -> suite cases
describe('calculadora (ESM)', () => {
  // Test -> test suite
  test('soma dois valores', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('subtrai dois valores', () => {
    expect(subtrai(7, 4)).toBe(3);
  });
});
