var express = require("express"),
    fs = require("fs");

express().use("/books", function(request, response) {
  fs.readFile(process.argv[3], function(err, data) {
    response.send(JSON.parse(data.toString()));
  });
}).listen(process.argv[2]);