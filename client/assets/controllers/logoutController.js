app.controller('logoutController', function($scope, $location, appointmentsFactory) {
  $scope.currentPatient = ''
  $scope.appointments =[];
  $scope.currentPatient = appointmentsFactory.getcurrentPatient();
  console.log($scope.currentPatient)
  appointmentsFactory.logout();
  console.log("logout comes here")
  $location.path('/logout');

})
