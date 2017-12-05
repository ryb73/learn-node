"use strict";

const fs = require("fs");

let fname = process.argv[2];

fs.createReadStream(fname)
    .pipe(process.stdout);