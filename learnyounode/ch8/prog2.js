const http = require("http"),
      bl = require("bl");

http.get(process.argv[2], function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      console.error(err);
      return;
    }
    
    var dataStr = data.toString();
    console.log(dataStr.length);
    console.log(dataStr);
  }));
});