const http = require("http");

const numUrls = 3;

var respArray = initResp(numUrls),
    responsesReceived = 0;

var i;
for(i = 0; i < numUrls; ++i) {
  http.get(process.argv[2 + i], respFunction(i));
}

function checkEnd() {
  if (responsesReceived >= numUrls) {
    respArray.forEach(function(elem) {
      console.log(elem);
    });
  }
}

function initResp(num) {
  var res = new Array(num);
  for(var i = 0; i < num; ++i) {
    res[i] = "";
  }
  
  return res;
}

function respFunction(index) {
  return function(response) {
    response.setEncoding("utf8");

    response.on("error", function(error) {
      console.error(error);
      respArray[index] = null;
      ++responsesReceived;
    });
    
    response.on("data", function(data) {
      respArray[index] += data;
    });
    
    response.on("end", function() {
      ++responsesReceived;
      
      checkEnd();
    });
  };
}