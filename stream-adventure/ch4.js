"use strict";

const through = require("through2");

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

let stream = through(write, end);

process.stdin
    .pipe(stream)
    .pipe(process.stdout);