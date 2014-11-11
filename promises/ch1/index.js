var q = require("q");

var deferred = q.defer();
deferred.promise.then(console.log);
setTimeout(function() { deferred.resolve("RESOLVED!"); }, 300);