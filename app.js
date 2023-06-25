
// Requiring module
const express = require('express');
const Controller = require('./Controller/healthcheck');
const Server = require('./server');
 
// Creating express object
const app = express();
//const loginController = require('Controller/Login');
 var router = express.Router();
var controller = new Controller();
var server = new Server();
//controller.init(router);\


// Handling GET request
/*app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})*/
 
