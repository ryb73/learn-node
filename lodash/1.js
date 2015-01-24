var _ = require("lodash");

module.exports = function(obj) {
  return _.where(obj, {active: true});
};