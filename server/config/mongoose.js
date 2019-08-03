//***********************************************************************
console.log('mongo connect and mongoose setup GO!');
//************************* Requires *******************************************
var mongoose    = require('mongoose'),
    path        = require('path'),
    fs          = require('fs');

//*************************** Mongoose CONNECT *********************************
//*************************** CHANGE DB NAME!  *********************************
mongoose.connect('mongodb://localhost/project');

mongoose.connection.on('error', function (err) {
  console.error(`Mongoose connection-error:`, err);
});
mongoose.connection.on( 'connected', function () {
  console.log( `MONGOOSE CONNECT!` );
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

//*************************** MODEL SETUP **************************************
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if( file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file);
    }
})
