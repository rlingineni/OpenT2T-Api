'use strict';
var whRegister = require('./Wink/onboarding');

module.exports = function(app) {
 
    app.get('/register/:type/:token', function(req, res) {
    res.send({'register': req.params.type, 'token':req.params.token});    
    });


    app.post('/register/wink' ,function(req,res){
    var username =req.body.username;
    var password = req.body.password;
    var idkey = req.body.idkey;

    whRegister.onboard(idkey,username,password).then(result => {
         res.header("Content-Type",'application/json');
         res.send(result);
    }).catch(error => {
        res.header("Content-Type",'application/json');
         res.send(error);
    });

    });

}

