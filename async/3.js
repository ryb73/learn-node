var http = require("http"),
    async = require("async");

var urls = [ process.argv[2], process.argv[3] ];

async.each(urls, function(item, done) {
  http.get(item,function(response) {
    response.on("data", function() {});
    response.on("end", function() { done(); });
  }).on("error", function(err) { done(err); });
}, function(err) {
  console.log(err);
});