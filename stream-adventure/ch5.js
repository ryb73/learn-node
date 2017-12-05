"use strict";

const through = require("through2"),
      split   = require("split");

let lower = true;

process.stdin
    .pipe(split())
    .pipe(through(function (buffer, encoding, next) {
        if(lower)
            this.push(buffer.toString().toLowerCase() + "\n");
        else
            this.push(buffer.toString().toUpperCase() + "\n");

        lower = !lower;

        next();
    }))
    .pipe(process.stdout);