//***********************************************************************
app.controller('editController', function($scope, friendsFactory, $location, $routeParams) {
  console.log('Edit Controller Loaded');
  friendsFactory.show($routeParams.id, function(data) {
    $scope.friend = data;
  })

  $scope.update = function() {
    console.log($scope.friend);
    friendsFactory.update($scope.friend, function(data) {
      $location.url('/');
    })
  }
})
