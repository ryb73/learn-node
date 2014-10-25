var express = require("express");

express().get("/search", function(request, response) {
  response.send(request.query);
}).listen(process.argv[2]);