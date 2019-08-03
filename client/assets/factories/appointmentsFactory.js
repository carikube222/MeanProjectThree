//***********************************************************************
app.factory('appointmentsFactory', function($http) {
  console.log('client/appointmentsFactory.js');
//***********************************************************************
  var appointments=[];
  var factory = {};
  var currentPatient;

  factory.index  = function(callback) {
    $http.get('/appointments').then(function(res) {
      if (typeof callback === 'function') {
        // friends = res.data
        // callback(friends)
        callback(res.data);
      }
    });
  }

  factory.show = function(id, callback) {
    $http.get('/appointments/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }

  factory.create = function(newAppointment, callback) {
    appointment = {name:newAppointment.name, date:newAppointment.date, time:newAppointment.time, concern:newAppointment.concern, createAt:new Date()};
    $http.post('/appointments/new', appointment).then(function(res) {
      console.log("client/appointmentsFactory.js Create")
      console.log(res);
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  factory.update = function(appointment, callback) {
    $http.put('/appointments/'+appointment._id, appointment).then(function(res) {
      console.log("client/appointmentsFactory.js Update")
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  factory.delete = function(appointment, callback) {
    $http.delete('/appointments/'+appointment._id).then(function(res) {
      console.log("client/appointmentsFactory.js Delete")
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  factory.getcurrentPatient = function(){
    return currentPatient;
  }

  factory.setcurrentPatient = function(patient){
    currentPatient = patient;
  }

  factory.logout = function(){
    currentPatient = ''
  }
//***********************************************************************
  return factory;
})
//***********************************************************************

// factory.create = function(newPoll, callback) {
//         poll = {title: newPoll.title, optOne: newPoll.optOne, optTwo: newPoll.optTwo, optThree: newPoll.optThree, optFour: newPoll.optFour, _user: newPoll._user, date: new Date()};
//         console.log(poll, "This is poll stuff in Poll Factory");
//         $http.post('/polls/' + newPoll._user, poll).then(function(res) {
//           if (callback && typeof callback === "function") {
//             callback(res.data);
//             // console.log(res.config, "This is res.config from New Poll Factroy!");
//           }
//         });
//       };
