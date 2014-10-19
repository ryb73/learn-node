var http = require("http");

http.get(process.argv[2], function(response) {
  response.setEncoding("utf8");

  response.on("error", console.error);
  
  var respString = "";
  response.on("data", function(data) {
    respString = respString + data;
  });
  
  response.on("end", function() {
    console.log(respString.length);
    console.log(respString);
  });
});