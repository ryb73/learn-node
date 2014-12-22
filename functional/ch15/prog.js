function loadUsers(userIds, load, done) {
  var users = [],
      numLoaded = 0;
  userIds.forEach(function(userId, i) {
    load(userId, function(user) {
      users[i] = user;
      ++numLoaded;
      if(numLoaded === userIds.length)
        done(users);
    });
  });
}

module.exports = loadUsers;