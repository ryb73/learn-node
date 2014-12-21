var http = require("http"),
    async = require("async");

var url = process.argv[2];
var port = process.argv[3];

async.series([
  function(cb) {
    async.times(5, postUser, cb);
  },
  doGet
], function(err, result) {
  if(err) return console.error(err);
  // console.log(result);
});

function doGet(cb) {
  var body = "";

  var opts = {
    hostname: url,
    port: port,
    path: "/users",
    method: "GET"
  };

  http.request(opts, function(response) {
    response.on("data", function(chunk) {
      body += chunk.toString();
    });

    response.on("end", function() {
      console.log(body);
      cb(null, body);
    });
  }).on("error", function(err) {
    cb(err);
  }).end();
}

function postUser(n, cb) {
  var opts = {
    hostname: url,
    port: port,
    path: "/users/create",
    method: "POST"
  };

  var request = http.request(opts, function(response) {
    response.on("data", function() { });

    response.on("end", function() {
      cb();
    });
  });

  request.on("error", function(err) {
    cb(err);
  });

  var msg = JSON.stringify(createUser(n));
  request.write(msg + "\r\n");
  request.end();
}

function createUser(num) {
  return { user_id: num+1 };
}