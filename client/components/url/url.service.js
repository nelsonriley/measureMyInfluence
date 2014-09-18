'use strict';

angular.module('troomlyApp')
  .service('url', function () {
    
    // user browserify?
    // may be helpful:
      // https://github.com/brentoboy/url-patterns/blob/master/src/urlPatterns.js
      // https://www.npmjs.org/package/url

    var validify = function(url) {
      return url;
    };

    var isValid = function(url) {
      if (url.length > 5) {
        return true;
      }
      return false;
    };

    var minimize = function(url) {
      return url;
    };

    return {
      isValid: isValid,
      minimize: minimize
    };

  });
