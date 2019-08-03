//******************************************************************************
var path = require('path')
//******************************************************************************
//*************** ADD all your server/controllers/.js Here *********************
var appointments = require("./../controllers/appointments.js")
// var questions = require("./../controllers/questions.js")
// var users = require("./../controllers/users.js")

module.exports = function(app){
//******************************************************************************
  console.log('config/routes.js!');
//******************************************************************************
//change routes & friendS.function
//******************************************************************************
  app.get('/appointments', function(req, res) {
    console.log("config/routes.js show all")
    appointments.index(req, res);
  });

  app.get('/appointments/:id', function(req, res) {
    console.log("config/routes.js show one")
    appointments.show(req, res);
  })

  app.post('/appointments/new', function(req, res) {
    console.log("config/routes.js create")
    appointments.create(req, res);
  });

  app.put('/appointments/:id', function(req, res) {
    console.log("config/routes.js update")
    appointments.update(req, res);
  })

  app.delete('/appointments/:id', function(req, res) {
    console.log("config/routes.js delete")
    appointments.delete(req, res);
  })
//******************************************************************************
}
//******************************************************************************
