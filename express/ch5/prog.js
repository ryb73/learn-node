var express = require("express"),
    stylus = require("stylus");

var dir = process.argv[3];

var app = express();

app.use(stylus.middleware(dir))
   .use(express.static(dir))
   .listen(process.argv[2]);