var findext = require("./findext.js");

findext(process.argv[2], process.argv[3], function(err, data) {
  if(err) {
    console.log("error");
    return;
  }

  for(var i = 0; i < data.length; ++i) {
    console.log(data[i]);
  }
});