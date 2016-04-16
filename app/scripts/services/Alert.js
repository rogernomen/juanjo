'use strict';

angular.module('alertMngApp')
  .factory('Alert', ['$firebaseArray', 'Ref', function ($firebaseArray, Ref) {

      var self = this;

      self.alerts = [];

      _activate();


      self.getAlerts = function () {
        return self.alerts;
      };

      function _activate() {
          self.alerts = $firebaseArray(Ref.child('alerts/'));

      }

      return self;

  }]);
