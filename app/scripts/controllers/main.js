'use strict';

/**
 * @ngdoc function
 * @name alertMngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alertMngApp
 */
angular.module('alertMngApp')
  .controller('MainCtrl', ['$scope', '$location', 'Auth', 'Alert', function ($scope, $location, Auth, Alert) {


      _init();

      function _init() {
          if(!_isUserAuth()) {
              $location.path('/login');
          }

          $scope.user = Auth.$getAuth();
          $scope.alerts = Alert.getAlerts();
      }


      function _isUserAuth() {
        var auth = Auth.$getAuth();
        console.log(auth);
        return auth.uid;
      }
  }]);
