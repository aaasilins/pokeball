(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Покеболла";
  $scope.stateOfBeing = 0;

  $scope.sayMessage = function () {
    var msg = "Покорми меня и узнаешь что внутри!";
    if ($scope.stateOfBeing == 1) {
      $scope.name = "Пичу";
      msg = "Я Пичу, самый маленький покемон и я хочу кушать";
    } else if ($scope.stateOfBeing == 2) {
      $scope.name = "Пикачу";
      msg = "Полина! Поздравляю с Днём Рождения! Не забудь меня покормить :)";
    } else if ($scope.stateOfBeing == 3) {
      $scope.name = "Райчу";
      msg = "Я Райчу, самый старший и сильный. Не корми меня больше, а то я спрячусь"
    }
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.feedPika = function () {
    if ($scope.stateOfBeing == 3) {
      $scope.stateOfBeing = 0;
      $scope.name = "Покеболла";
    } else {
    $scope.stateOfBeing = 1 +  $scope.stateOfBeing;

    }

  };
}

})();
