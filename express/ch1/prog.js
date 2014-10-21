var express = require("express");

express().get("/home", function(request, response) {
  response.end("Hello World!");
}).listen(process.argv[2]);