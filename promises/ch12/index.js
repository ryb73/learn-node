var qHttp = require("q-io/http"),
    _ = require("lodash");

qHttp.read("http://localhost:7000")
  .then(function (buffer) {
    return qHttp.read("http://localhost:7001/" + buffer.toString("utf8"));
  })
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.log);