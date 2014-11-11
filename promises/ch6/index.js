var q = require("q");

parsePromise(process.argv[2])
  .then(console.log, console.log);

function parsePromise(val) {
  var deferred = q.defer();
  try {
    deferred.resolve(JSON.parse(val));
  } catch(err) {
    deferred.reject(err);
  }

  return deferred.promise;
}