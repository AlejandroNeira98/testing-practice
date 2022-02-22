const reverseString = require('./reverseString');

test('Reverse', () => {
  expect(reverseString('asdf')).toBe('fdsa');
})