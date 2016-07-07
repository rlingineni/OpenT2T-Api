'use strict';


function executeRequest(params) {

    var translator = require(params.translator + "/thingtranslator");
    
    function Device(deviceId, accessToken) {
    this.props = ' { "id": "' + deviceId + '", "access_token": "' + accessToken + '" }';
    this.name = "Wink Thermostat ";
    }

//init device here
   
    translator.initDevice(device);

    var execute = "translator."+params.command;
    console.log(eval(execute));
}
 
module.exports = function(app)
{
    app.post('/invoke' ,function(req,res){
    var command =req.body.command;
    var translator = req.body.translator;
    console.log(translator);
    res.send(translator + " " + command);
   executeRequest(req.body)
    });

}