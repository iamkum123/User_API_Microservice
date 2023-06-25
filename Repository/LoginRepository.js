//const sequelize = require ('sequelize');
var mysql = require('mysql');
const  {makeDb}  = require('mysql-async-simple');

class LoginRepository {
    constructor(){
    
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
}

module.exports =LoginRepository;