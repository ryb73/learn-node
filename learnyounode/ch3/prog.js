var fs = require("fs");

if(!process.argv[2]) return;

var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().split("\n").length - 1);