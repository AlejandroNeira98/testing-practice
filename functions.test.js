const stringLength = require('./stringLength');

test('AAA has 3 letters', () => {
  expect(stringLength('AAA')).toBe(3);
});

test('Empty string', () => {
  expect( () => stringLength('')).toThrowError('the string is too long (>10) or has no caracters');
});

test('long string', () => {
  expect( () => stringLength('aaaaaaaaaaa')).toThrowError('the string is too long (>10) or has no caracters');
});

