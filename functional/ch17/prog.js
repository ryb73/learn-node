function curryN(fn, n) {
  if(!n)
    n = fn.length;

  return function(arg1) {
    if(n === 1)
      return fn(arg1);
    return curryN(fn.bind(null, arg1), n - 1);
  };
}

module.exports = curryN;