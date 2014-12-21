function repeat(operation, num) {
  return trampoline(repeatHelper.bind(null, operation, num));
};

function repeatHelper(operation, num) {
  if(num <= 0) return;
  operation();
  return repeatHelper.bind(null, operation, num - 1);
}

function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}

module.exports = repeat;