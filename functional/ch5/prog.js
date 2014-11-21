module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
     return submittedUsers.every(function (maybeUser) {
      return goodUsers.some(function (checkUser) {
        return checkUser.id === maybeUser.id;
      });
     });
  };
};