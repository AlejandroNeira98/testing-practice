function capitalize(string) {
  const rest = string.slice(1);
  return string.charAt(0).toUpperCase() + rest;
}

module.exports = capitalize;