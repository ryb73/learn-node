module.exports = function countWords(words) {
  return words.reduce(function (previous, current) {
    if(!previous[current])
      previous[current] = 0;
    previous[current]++;
    return previous;
  }, {});
};