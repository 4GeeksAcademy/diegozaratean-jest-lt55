const sum = require('./sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 2 + 7 to equal 9', () => {
  expect(sum(2, 7)).toBe(9);
});

test('adds 0 + 5 to equal 5', () => {
  expect(sum(0, 5)).toBe(5);
});

test('adds 8 + 3 to equal 11', () => {
  expect(sum(8, 3)).toBe(11);
});
