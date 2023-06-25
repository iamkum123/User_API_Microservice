//const router = express.Router();
//const express = require("express");
var LoginService = require("../Service/LoginService");

class LoginController{
    constructor(){
        this.loginService =new LoginService();
    
    }

    async init(router){
        var self = this;

        router.route('/').get(async function(req,res,next){
            res.status(200).send({success:true});
        });

         router.route('/omg').get(async function(req,res,next){
            req.body;
            var a = await self.loginService.login(req.query);
            
             //console.log(a  );
             res.status(200).send(a[0]);
        });
    }

}
module.exports =LoginController;