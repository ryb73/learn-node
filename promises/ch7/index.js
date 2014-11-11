var q = require("q");

q.fcall(parseLater(process.argv[2]))
  .then(console.log, console.log);

function parseLater(val) {
  return function() {
    JSON.parse(val);
  };
}