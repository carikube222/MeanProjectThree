//***********************************************************************
var mongoose  = require('mongoose'),
    Appointment    = mongoose.model('Appointment')
//************* Change to the right mongoose.model **********************
//***********************************************************************
module.exports = (function() {
  return {
    index: function(req, res) {
      console.log('3. index');
      Appointment.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    },
    show: function(req, res) {
      console.log(req.params);
      Appointment.findOne({_id: req.params.id}, function(err,data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          res.json(data);
        }
      })
    },
    create: function(req, res) {
      var appointment = new Appointment({name: req.body.name, date: req.body.date, time: req.body.time, concern: req.body.concern});
      // var friend = new Freind(req.body); <-- This works! also but don't use this for the belt. you'll get confused.
      appointment.save(function(err) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log("didn't get saved")
          res.json({success: true});
          console.log("got saved")
        }
      })
    },
    update: function(req, res) {
      console.log(req.params, req.body);
      Appointment.findOne({_id: req.params.id}, function(err, data) {
        for (var i in req.body) {
          if (req.body[i] != data[i]) {
          data[i] = req.body[i];
          }
        }
        console.log(data);
        data.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log(data);
            res.json(data);
          }
        })
      })
    },
    delete: function(req, res) {
      console.log(req.params.id);
      Appointment.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          Appointment.remove(data, function(error, datum) {
            if (error) {
              console.log(error);
              res.json(error);
            } else {
              console.log(datum);
              res.json(datum);
            }
          })
        }
      });
    }
  }
})();
//***********************************************************************
