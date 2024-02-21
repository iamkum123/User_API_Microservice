const express = require ('express');
const routes = require('./routes/route'); // import the routes
const nconf = require("nconf");

const app = express();

app.use(express.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use('/', routes); //to use the routes

//require('dotenv').load();

nconf.use('memory');
nconf.argv().env().file({file: './config/development.json'});
console.log('development');

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})