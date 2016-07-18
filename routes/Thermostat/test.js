var thermostat = require('./index');


var params = 
{
    translator: "Wink-Thermostat",
    command: "turnOn()"   
}

thermostat.invokeTranslator(params);