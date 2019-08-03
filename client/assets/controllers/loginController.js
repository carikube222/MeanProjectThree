app.controller('loginController', function($scope, $location, appointmentsFactory) {
  $scope.currentPatient = ''
  $scope.appointments =[];
  $scope.currentPatient = appointmentsFactory.getcurrentPatient();
  console.log($scope.currentPatient)
  if ($scope.currentPatient == undefined){
    console.log("Here?")
    $scope.addPatient = function(){
      console.log("howabouthere?")
      console.log($scope.newPatient)
      $scope.currentPatient = $scope.newPatient;
      console.log($scope.currentPatient);
      appointmentsFactory.setcurrentPatient($scope.currentPatient);
      console.log("come here?");
      $location.path('/appointments');
    }
  }
})

  // appointmentsFactory.index(function(data) {
  //   $scope.appointments = data;
  //   console.log("how about here?")
  // });
