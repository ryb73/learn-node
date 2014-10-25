var express = require("express"),
    crypto = require("crypto");

var app = express();
app.put("/message/:id", function(request, response) {
  response.end(crypto.createHash("sha1")
                     .update((new Date().toDateString()) + request.params.id)
		     .digest("hex"));
}).listen(process.argv[2]);