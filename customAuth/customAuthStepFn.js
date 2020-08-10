// This customAuthStepFn is accept only if the callerId is hello_world
module.exports = function (context, callback) {
  if(context.callerId != "hello_world"){
    callback(new Error('Failed in customAuthStepFn due to wrong callerId'));
  }
  callback();
};