//***********************************************************************
app.controller('newController', function($scope, appointmentsFactory, $location) {
  $scope.currentPatient = ''
  $scope.appointments =[];
  $scope.currentPatient = appointmentsFactory.getcurrentPatient();
  console.log('new Controller Loaded');
  console.log($scope.currentPatient);

  $scope.create = function(){
    $scope.hasErrors=[];
    var newdate = $scope.newAppointment.date;
    var newtime = $scope.newAppointment.time;
    var schedule = new Date($scope.newAppointment.date);
    // html5 validations to set min & mat length
    //<input type="text" pattern=".{11,}" placeholder="at least 11 Characters">
    //<input type="text" pattern="[0-9]{9}" />
    if(newdate < new Date()) {
      console.log("comparing dates")
      $scope.hasErrors.push("Date cannot be in the past!");
    }
    //hours between 8-5pm
    if(8 > newtime.getHours() || newtime.getHours() > 16) {
      $scope.hasErrors.push("We are open 8am to 5pm");
    }
    //one user can have 1 appointment per day
    countAppointments = 0;
    for (var i = 0; i < $scope.appointments.length; i++){
      var scheduled = new Date($scope.appointments[i].date)
      if (schedule.getTime() == scheduled.getTime()){
        if($scope.currentPatient == $scope.appointments[i].name){
          $scope.hasErrors.push("You already made an appointment for that day.");
          break;
        }
        countAppointments++;
      }
    }
    // 3 appointments per day
    if (countAppointments >=3){
      $scope.hasErrors.push("Sorry, We are fully booked. Choose a different day.")
    }

    if ($scope.hasErrors.length >0){
      return;
    }

    $scope.newAppointment.name = $scope.currentPatient;
    appointmentsFactory.create($scope.newAppointment, function (data) {
      if (data.errors) {
        $scope.errors = data.errors;
        console.log($scope.errors);
      } else {
        console.log(data)
        console.log("Got saved");
        $scope.newAppointment = {};
			  $location.path('/appointments');
		    }
      })
    }
//***********************************************************************
})
//***********************************************************************
