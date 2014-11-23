module.exports = function logger(prefix) {
  return function() {
    Array.prototype.unshift.call(arguments, prefix);
    console.log.apply(null, arguments);
  };
};