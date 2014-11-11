var q = require("q");

var def1 = q.defer(),
    def2 = q.defer();

all(def1.promise, def2.promise).then(console.log);

setTimeout(def1.resolve, 200, "PROMISES");
setTimeout(def2.resolve, 200, "FTW");

function all(p1, p2) {
  var deferred = q.defer(),
      count = 0,
      val1,
      val2;

  p1.then(function (val) {
    ++count;
    val1 = val;
    if(count == 2)
      deferred.resolve([val1, val2]);
  }, function(err) {
    deferred.reject(err);
  });

  p2.then(function (val) {
    ++count;
    val2 = val;
    if(count == 2)
      deferred.resolve([val1, val2]);
  }, function(err) {
    deferred.reject(err);
  });

  return deferred.promise;
}