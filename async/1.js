var http = require("http"),
    async = require("async"),
    fs = require("fs");

var filePath = process.argv[2];

async.waterfall([
	function(cb) {
		fs.readFile(filePath, function(err, data) {
			if(err) {
				cb(err);
			} else {
				cb(null, data.toString());
			}
		})
	},
	function(data, cb) {
		var body = "";
		http.get(data, function(response) {
			response.on("data", function(chunk) {
				body += chunk.toString();
			});

			response.on("end", function() {
				cb(null, body);
			});
		}).on("error", function(err) {
			cb(err);
		});
	},
], function(err, result) {
	if(err) return console.error(err);
	console.log(result);
});