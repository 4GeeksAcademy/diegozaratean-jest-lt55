const sum = require('./sum');

test('adds 21 + 17 to equal 38', () => {
  expect(sum(21, 17)).toBe(38);
});