# OpenT2T-Api
API for interfacing with OpenT2T

Simple OPENT2T Rest API that is in the works. Download and use it locally for now to test it. Currently supports onboarding for Wink Devices (you will need to open Onboarding/Wink.JS and plugin in your client details).

1.) Use the `Search` route to get supported devices:
`http://localhost:3000/search/{keyword}`

You will get a JSON array response with pertinent info:
   [{
      
      "DeviceName":"Wink-Thermostat",
      "Onboarding":"Wink",
      "id_filter":"thermostat_id",
      "Schema": "Thermostat",
      "Keywords": ["thermostat","nest","wink","ecobee","temperature"]
     }]
     
Use that data for the next API commands:

2.) Use the `Onboard` route to get the necessary information to control a device (Only Wink):
> POST `http://localhost:3000/onboard/wink` {idkey,username,password} as urlencoded

3.) Use the `Invoke` route to control a device (Use Data returned from from both Onboarding and Search):
> POST `http://localhost:3000/invoke/wink` {command,schema,device,deviceparams}

Here's what the headers mean
`command` - > Exactly as you invoke in JS (e.g.`getCurrentTemperature()`, notice the parantheses )

`schema` -> Schema is the schema name from the search route

`device` -> This is the Device Name , you get from the search route

`deviceparams` -> JSON object stringified with some information (For now only Wink)

     { 
     "id": "Wink Device ID", "accessToken": "Wink Access Token" 
     }







