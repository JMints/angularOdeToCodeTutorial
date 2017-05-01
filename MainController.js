(function() {
  
  var app = angular.module("githubViewer");  
  
  var MainController = function($scope, $interval, $location) {

    //Countdown functions
    var countdownInterval = null;

    var decrementCountdown = function() {
      $scope.countdown -= 1
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    //Search function
    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
      }
      
      $location.path("/user/" + username); 
    }

    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };

  
  app.controller("MainController", MainController);

}());