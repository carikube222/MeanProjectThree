//***********************************************************************
//**************************** console.log current model name ***********
console.log("1. models/appointment.js")
//***********************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  concern: String,
  createAt: {type:Date, default: Date.now}
})
mongoose.model('Appointment', AppointmentSchema);



// _user: {type: Schema.Types.ObjectId, ref: 'User'},
// text: {type: String, required: [true, "question required"], minlength: [15, 'question must be at least 15 characters long']},

// var FavoriteSchema = new mongoose.Schema({
//   _user: {type: Schema.Types.ObjectId, ref: 'User'},
//   _comment:{type: Schema.Types.ObjectId, ref: 'Comment'},
// })
//   comments: [{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
//   upvotes: {type:Number, default:0, required: true},
//   downvotes: {type:Number, default:0, required: true},
// }, {timestamps: true });
