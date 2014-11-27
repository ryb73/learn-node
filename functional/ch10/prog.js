module.exports = function logger(prefix) {
  return console.log.bind(null, prefix);
};