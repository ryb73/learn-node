var http = require("http"),
    url = require("url");

http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var dateObj = new Date(parsedUrl.query.iso);
  var res;
  if (parsedUrl.pathname === "/api/parsetime") {
    res = parseTime(dateObj);
  } else if (parsedUrl.pathname === "/api/unixtime") {
    res = unixTime(dateObj);
  }

  response.write(JSON.stringify(res));
  response.end();
}).listen(process.argv[2]);

function parseTime(dateObj) {
  return {
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes(),
    second: dateObj.getSeconds()
  };
}

function unixTime(dateObj) {
  return {
    unixtime: dateObj.getTime()
  };
}