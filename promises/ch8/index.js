var q = require("q");

q.fcall(iterate, 1)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(throwMyGod)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(null, console.log);

function throwMyGod() {
  throw new Error("OH NOES");
}

function iterate(n) {
  console.log(n);
  return n+1;
}