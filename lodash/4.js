var _ = require("lodash");

module.exports = function(cities) {
  var res = {
    hot: [],
    warm: []
  };

  _.forEach(cities, function(val, city) {
    if(_.every(val, gr19)) {
      res.hot.push(city);
    } else if(_.some(val, gr19)) {
      res.warm.push(city);
    }
  });

  return res;
};

function gr19(num) {
  return num > 19;
}