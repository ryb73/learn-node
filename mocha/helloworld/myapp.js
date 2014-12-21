var connect = require("connect"),
	http = require("http"),
	path = require("path"),
	serveStatic = require("serve-static");

module.exports = function() {
	var base = path.resolve("app");
	var app = connect().use(serveStatic(base));
	return http.createServer(app);
};