"use strict";

const http = require("http"),
      through2 = require("through2");

let server = http.createServer((req, res) => {
    req
        .pipe(through2(function (buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        }))
        .pipe(res);
});

server.listen(process.argv[2]);