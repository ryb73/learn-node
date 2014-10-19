const net = require("net"),
      strftime = require("strftime");

net.createServer(function(socket) {
  socket.end(strftime("%F %R\n"));
}).listen(+process.argv[2]);