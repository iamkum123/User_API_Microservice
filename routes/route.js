const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
//const HCController = require('../controller/healthcheck'); 
const LoginController = require('../Controller/Login');
var controller = new LoginController();
// 3.
//router.get('/', Controller.init); 
controller.init(router)


// 4. 
module.exports = router;
