angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.users = mainService.getUsers();

    $scope.toggleFavorite = function(userID){
      // mainService.toggleFavorite will toggle the matching user and return
      // an updated list we can use to reset (update) the 
      $scope.users = mainService.toggleFavorite(userID); // doing this because our original variable is a copy
    }
})
