const http = require("http"),
      through2Map = require("through2-map");

http.createServer(function(request, response) {
  request.pipe(through2Map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
}).listen(process.argv[2]);