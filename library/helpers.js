// helper methods for global app use
var getEnv = exports.getEnv = function () {
  if (process.env.hasOwnProperty('NODE_ENV')) {
    return process.env.NODE_ENV;
  } else {
    return 'development';
  }
};

var isDev = exports.isDev = function () {
  return getEnv() == 'development';  
};