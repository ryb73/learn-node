var http = require("http"),
    async = require("async");

var urls = [ process.argv[2], process.argv[3] ];

async.map(urls, doGet, function(err,result) {
  if(err) return console.error(err);
  console.log(result);
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