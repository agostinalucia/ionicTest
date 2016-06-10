(function () {
   'use strict';

  angular.module('starter').factory('serviceName', [serviceName]);

  function serviceName() {

    var leages = JSON.parse('[{"id": 6235,"name": "Chapelgate","coach": "Frick Frierson"},{"id": 6235,"name": "Chae","coach": "Frick Frierson"},' +
      '{"id": 6215,"name": "holahola","coach": "Frick Frierson"}]');

    function getLeagues() {
      return leages;
    }

    return {
      getLeagues: getLeagues
    };

  }


})();
