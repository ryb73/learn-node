var q = require("q");

var def1 = q.defer(),
    def2 = q.defer();

q.all([def1.promise, def2.promise])
  .then(console.log);

setTimeout(def1.resolve, 200, "PROMISES");
setTimeout(def2.resolve, 200, "FTW");