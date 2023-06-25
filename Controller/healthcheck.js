//const router = express.Router();
//const express = require("express");

class healthCheckController{
    constructor(){
    
    }

    init(router){
        router.route('/').get(function(req,res,next){
            res.status(200).send({success:true});
        });
    }

}
module.exports =healthCheckController;