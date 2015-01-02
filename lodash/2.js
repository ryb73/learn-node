var _ = require("lodash");

module.exports = function(list) {
  return _.sortBy(list, function(sale) {
    return -sale.quantity;
  });
};