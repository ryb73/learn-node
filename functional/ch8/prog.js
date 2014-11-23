module.exports = function duckCount() {
  return Array.prototype.reduce.call(arguments, function(val, argument) {
    if(Object.prototype.hasOwnProperty.call(argument, "quack"))
      return val + 1;
    return val;
  }, 0);
};