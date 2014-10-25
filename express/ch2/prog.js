var express = require("express");

var app = express();
app.set("views", process.argv[3]);
app.set("view engine", "jade");
app.get("/home", function(request, response) {
  response.render("index", {
    date: new Date().toDateString()
  });
}).listen(process.argv[2]);;