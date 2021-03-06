var http = require("http"),
    async = require("async");

var urls = [ process.argv[2], process.argv[3] ];

async.series(
{
  requestOne: function(cb) {
    doGet(urls[0], cb);
  },
  requestTwo: function(cb) {
    doGet(urls[1], cb);
  }
}, function(err, res) {
  console.log(res);
});

function doGet(url, cb) {
  var body = "";
  http.get(url, function(response) {
    response.on("data", function(chunk) {
      body += chunk.toString();
    });

    response.on("end", function() {
      cb(null, body);
    });
  }).on("error", function(err) {
    cb(err);
  });
}