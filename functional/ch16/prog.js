function getDependencies(obj) {
  var res = Object.keys(obj.dependencies || {})
    .map(function(key) {
      var depObj = obj.dependencies[key];
      return [].concat(
        key + "@" + depObj.version,
        getDependencies(obj.dependencies[key])
      );
    })
    .reduce(function(depsObj, deps) {
      deps.forEach(function(dep) {
        depsObj[dep] = true;
      });
      return depsObj;
    }, {});

  return Object.keys(res).sort();
}

module.exports = getDependencies;