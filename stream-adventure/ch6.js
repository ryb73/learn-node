"use strict";

const concatStream = require("concat-stream");

process.stdin
    .pipe(concatStream((body) => {
        console.log(body.toString().split("").reverse().join(""));
    }));