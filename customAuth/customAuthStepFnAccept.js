// This customAuthStepFn is the one doing no other verifcation than the token
module.exports = function (context, callback) {
  callback()
};