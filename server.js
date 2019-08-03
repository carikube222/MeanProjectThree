var bodyParser = require('body-parser');
var express    = require('express');
var path       = require('path');
var mongoose   = require('mongoose');
var app        = express();
var root       = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));

mongoose.Promise = global.Promise;
// set an environment variable called APPROOT to keep track of the root folder of your app
// process.env['APPROOT'] = __dirname; <--Do i need this?

require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

//************************** Server START!**********************************
var port = 8000;
app.listen(port, function(){
  console.log("Listening on Port:", port);
});
