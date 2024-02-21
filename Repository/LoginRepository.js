//const sequelize = require ('sequelize');
var mysql = require('mysql');
const  {makeDb}  = require('mysql-async-simple');
var restapiwrapper = require("../Repository/restapiwrapper");
const nconf = require('nconf');


class LoginRepository {
    constructor(){
      this.restApiWrapper = new restapiwrapper();

    }

      async login(req){
        
        var con =  mysql.createConnection({
            host: "localhost",
            database: "login",
            user: "root",
            password: "hahaha",
            //port: 1433,
            waitForConnections: true,
            connectTimeout: 60000,
            timeout : 60000
          });

          const db = makeDb();
          await db.connect(con);
         /*await con.connect((err) =>{
            if(err){
                console.log('Error connecting to DB');
                return;
            }
            console.log('Connected DB');
          })*/
          let username= req.username;
          let password= req.password;
          const rows =  await db.query(con, "SELECT * FROM user WHERE username='" + username + "'and password='"+ password+"'");
          console.log(rows);
          return rows;
     /*await con.query('select * FROM user', (err, rows) => {
        if (err) console.log(err);
        console.log('The data from users table are: \n', rows);
        con.end();
        return rows;
    });*/
        
    }

    async getCovidStatus(){

      var request = {
        urlOverride: nconf.get ('Endpoints:CovidStatus:BaseURL') +
            nconf.get ('Endpoints:CovidStatus:endpoint'),
       /* urlParams:{

        }*/
        headers: {
            "X-RapidAPI-Key": nconf.get ('Endpoints:CovidStatus:ApiKey'),
            "X-RapidAPI-Host": nconf.get ('Endpoints:CovidStatus:Host')
        }
      }

      request.method = 'GET';

      let response = await this.restApiWrapper.call(request);

      if(response && response.hasOwnProperty("fault")== true || (response.hasOwnProperty('statusCode') && response.statusCode !== 200)){
        console.log("Error calling API");
      }
      else
      return response;
    }
}

module.exports =LoginRepository;