const stringLength = require('./stringLength');

test('AAA has 3 letters', () => {
  expect(stringLength('AAA')).toBe(3);
});

test('Empty string', () => {
  expect(stringLength('')).toStrictEqual(Error('the string is too long (>10) or has no caracters'));
});

test('long string', () => {
  expect(stringLength('aaaaaaaaaaa')).toStrictEqual(Error('the string is too long (>10) or has no caracters'));
});