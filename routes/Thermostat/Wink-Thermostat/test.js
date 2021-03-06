var translator = require('./thingTranslator');
var q = require('q');

var argv = require('optimist')
    .usage('Usage: $0 -i [device Id] -a [access token]')
    .demand(['i'])
    .demand(['a'])
    .argv;

// device object used for testing purposes (this is normally populated by the runtime)      
function Device(deviceId, accessToken) {
    this.props = ' { "id": "' + deviceId + '", "access_token": "' + accessToken + '" }';
    this.name = "Wink Thermostat ";
}

var device = new Device(argv.i, argv.a);

// initialize the translator for testing purposes (this is normally called by the runtime)
translator.initDevice(device);


// Go through a sequence of test operations for the translator
q.delay(1000)
 .then(() => translator.turnOff())
 .then(() => q.delay(2000))
 .then(() => translator.setMode("heat_only"))
 .then(() => q.delay(2000))
 .then(() => console.log(translator.getCurrentTemperature()))
 .then(() => q.delay(2000))
 .then(() => translator.setCoolingSetpoint(23))
 .then(() => q.delay(2000))
 .then(() => console.log(translator.getCoolingSetpoint()))
 .then(() => q.delay(2000))
 .then(() => translator.turnOn())
 .then(() => q.delay(2000))
 .done();

