var _ = require("lodash");

module.exports = function(towns) {
  return _.forEach(towns, function(town) {
    if(town.population > 1)
      town.size = "big";
    else if(town.population > 0.5)
      town.size = "med";
    else town.size = "small";
  });
};