module.exports = function reduce(arr, func, initial) {
  if(arr.length < 1) return initial;
  return reduce(arr.slice(1), func, func(initial, arr[0]));
};