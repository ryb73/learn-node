module.exports = function map(arr, func) {
  return arr.reduce(function (previous, current) {
    previous.push(func(current));
    return previous;
  }, []);
};