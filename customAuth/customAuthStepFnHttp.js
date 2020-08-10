// This customAuthStepFn is a proof that it can use the lib http. When a user uses a token, it will return an error containing the web page of pryv.com
const http = require('http')
var options = {
  host: 'pryv.com',
  path: ''
}
module.exports = function (context, callback) {
  httpCallback = function (response) {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      callback(new Error(str))
    });
  }
  http.request(options,httpCallback).end()
};