function stringLength(string) {
const length = string.length;
if (length < 1 || length > 10) {
  return new Error('the string is too long (>10) or has no caracters')
};
return length;
}

module.exports = stringLength;