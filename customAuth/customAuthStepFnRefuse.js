// This customAuthStepFn is the one refusing every time
module.exports = function (context, callback) {
  callback(new Error('Failed in customAuthStepFn'))
};
