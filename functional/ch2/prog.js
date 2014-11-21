module.exports = function repeat(func, num) {
  if(num < 1) return;
  func();
  repeat(func, num - 1);
};