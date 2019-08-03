//******************************************************************************
app.controller('mainController', function($scope, $location, appointmentsFactory) {
  $scope.currentPatient = ''
  $scope.appointments =[];
  $scope.currentPatient = appointmentsFactory.getcurrentPatient();
  console.log($scope.currentPatient);
  console.log('Main Controller Loaded');

  appointmentsFactory.index(function(data) {
    $scope.appointments = data;
  })

  $scope.upcoming = function(appointment){
    var now = Date.now()
    var scheduled = new Date(appointment.date);
    return (now <= scheduled.getTime());
  }

  $scope.delete = function(appointment){
    var scheduled = new Date(appointment.date);
    var now = Date.now()
    // cancel available only 24 hrs before
    if(scheduled.getTime() - now < 86400000){
      $scope.hasErrors = "You can only cancel 24 hrs before your appointment day."
      return;
    }
    appointmentsFactory.delete(appointment, function(data){
      appointmentsFactory.index(function(data){
        $scope.appointments = data;
        $location.path('/appointments');
      });
    })
  }
//***********************************************************************
})
//***********************************************************************
