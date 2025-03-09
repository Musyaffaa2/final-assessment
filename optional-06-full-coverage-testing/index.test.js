import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum harus mengembalikan hasil yang benar untuk bilangan positif', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 seharusnya 5');
  assert.strictEqual(sum(10, 20), 30, '10 + 20 seharusnya 30');
});

test('sum harus mengembalikan 0 jika salah satu angka negatif', () => {
  assert.strictEqual(sum(-2, 3), 0, '-2 + 3 seharusnya 0');
  assert.strictEqual(sum(4, -5), 0, '4 + (-5) seharusnya 0');
  assert.strictEqual(sum(-10, -5), 0, '-10 + (-5) seharusnya 0');
});

test('sum harus mengembalikan 0 jika input bukan angka', () => {
  assert.strictEqual(sum('5', 5), 0, '"5" + 5 seharusnya 0');
  assert.strictEqual(sum(3, null), 0, '3 + null seharusnya 0');
  assert.strictEqual(sum(undefined, 2), 0, 'undefined + 2 seharusnya 0');
  assert.strictEqual(sum({}, []), 0, '{} + [] seharusnya 0');
});

test('sum harus bekerja dengan nilai nol (0)', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya 0');
  assert.strictEqual(sum(0, 5), 5, '0 + 5 seharusnya 5');
  assert.strictEqual(sum(10, 0), 10, '10 + 0 seharusnya 10');
});
