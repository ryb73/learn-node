var fs = require("fs");
var path = require("path");

var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, dirs) {
		   for(var i = 0; i < dirs.length; ++i) {
		     if(path.extname(dirs[i]) === "." + ext) {
		       console.log(dirs[i]);
		     }
		   }
		 });