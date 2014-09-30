var fs = require("fs");
var path = require("path");

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, data) {
    if(err)
      return callback(err);

    var res = [];
    var extDot = "." + extension
    for(var i = 0; i < data.length; ++i) {
      if(path.extname(data[i]) == extDot) {
	res[res.length] = data[i];
      }
    }

    return callback(null, res);
  });
};