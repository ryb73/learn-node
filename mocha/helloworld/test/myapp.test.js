var assert = require("chai").assert,
	request = require("supertest"),
 	server = require("../myapp");

it("should return a 200 response", function(done) {
	var app = server();

	request(app)
		.get("/")
		.expect(200, done);
});

it("should return the correct HTML", function(done) {
	var app = server();
	
	request(app)
		.get("/")
		.end(function (err, res) {
			assert.isTrue(res.text.indexOf("</html>") > 0);
			done();
		});
});