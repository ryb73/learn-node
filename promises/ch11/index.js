var qHttp = require("q-io/http");

qHttp.read("http://localhost:7000")
  .then(function (buffer) {
    return qHttp.read("http://localhost:7001/" + buffer.toString("utf8"));
  })
  .then(function (buffer) {
    console.log(JSON.parse(buffer.toString()));
  })
  .then(null, console.log);