const cap = require('./capitalize');

test ('capitalize string', () => {
  expect(cap('alejandro')).toBe('Alejandro');
});