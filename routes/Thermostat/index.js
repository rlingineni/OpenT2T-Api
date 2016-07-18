var translator;

module.exports = {

   invokeTranslator: function(params)
   {

    translator = require("./"+params.device + "/thingtranslator");
   
    function Device(deviceId, accessToken) {
    this.props = ' { "id": "' + deviceId + '", "access_token": "' + accessToken + '" }';
    this.name = "Thermostat ";
    }

    var deviceParams = JSON.parse(params.deviceParams);
    //init device
    var device = new Device(deviceParams.id, deviceParams.accessToken);

    translator.initDevice(device);

    var execute = "translator."+params.command;
   
    console.log(eval(execute));

    return (eval(execute));
    
   }

 
}
    