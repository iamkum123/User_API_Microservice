var LoginRepository = require("../Repository/LoginRepository");

class LoginService {
    constructor(){
        this.loginRepository = new LoginRepository();
    }

    async login(req){
       var a= await this.loginRepository.login(req);
        return a;
    }

    async getCovidStatus(req){

        var response= await this.loginRepository.getCovidStatus(req);
        return response.response;
    }
}

module.exports =LoginService;