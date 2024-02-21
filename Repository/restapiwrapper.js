const config = require('nconf');
const request = require('axios');

class restApiWrapper {
    constructor(){
    
    }

    async call (apirequest){

        try{
            var options = {
                method: apirequest.method? apirequest.method : 'GET',
                url: apirequest.urlOverride,
                headers: apirequest.headers,
                forever: true,
                timeout: config.get('ApiTimeoutSec'),
                json: true,
                resolveWithFullResponse: true
            };

            let response = await request.request(options);
            return response.data;
        }
        catch(ex){
            console.log(ex.response.data);
        }
    }

    async resolveUrl(request){
        if(request.urlOverride){
            return this.resolveUrlParams(request.urlOverride, request.urlParams);
        }
    }

    async resolveUrlParams(request){

    }
}

module.exports =restApiWrapper;