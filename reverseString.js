function reverseString(string = String) {
  return string.split('').reverse().join('');
}

module.exports = reverseString;