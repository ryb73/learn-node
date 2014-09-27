var fs = require("fs");

if(!process.argv[2]) return;

fs.readFile(process.argv[2], "", function(err, data) {
				    console.log(data.toString().split("\n").length - 1);
				  });