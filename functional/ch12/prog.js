module.exports = function Spy(target, method) {
  var res = {};
  res.count = 0;

	var copy = target[method];
  target[method] = function() {
    ++res.count;
    return copy.apply(target, arguments);
  };

  return res;
};