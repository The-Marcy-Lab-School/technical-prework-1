const {add} = require('./index');

test('add function works', () => {
  expect(add(1, 2)).toBe(3);
});