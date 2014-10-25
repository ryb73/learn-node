var express = require("express"),
    bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.post("/form", function(request, response) {
  response.end(request.body.str.split("").reverse().join(""));
}).listen(process.argv[2]);