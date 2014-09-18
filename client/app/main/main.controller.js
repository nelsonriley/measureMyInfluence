'use strict';

angular.module('troomlyApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, url) {

    $scope.linkToShare = '';
    $scope.showGeneratedLinks = false;
    $scope.shareableLinks = {};
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser; // ie: {_id: "541923157ee49afc33448af0", provider: "local", name: "Nelson Riley", email: "nelsonriley@gmail.com", __v: 0…}

    var removeSpaces = function(str) {
      return str.replace(/\s+/g, '');
    };

    var updateShareableLinks = function() {
      var user = $scope.getCurrentUser();
      var links = $scope.shareableLinks;
      var baseURL = 'http://troomly.com/';
      var userName, userCode, urlName, urlCode;

      if ($scope.isLoggedIn()) {
        userName = removeSpaces(user.name).toLowerCase();
      } else {
        userName = 'yourname';
      }

      if (url.isValid($scope.linkToShare)) {
        urlName = $scope.linkToShare;
      } else {
        urlName = 'keep-typing';
      }

      links.full = baseURL + userName + '/' + urlName;
    };

    $scope.$watch('linkToShare', function(linkToShare) {
      if (linkToShare.length > 1) {
        $scope.showGeneratedLinks = true;
        updateShareableLinks();
      } else {
        $scope.showGeneratedLinks = false;
      }
    });

    // finish url service
      // isValid
      // minimize

    // generate each type of link as you type
    // space in user name removed and taken to lower case


    /////////////// Things

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
