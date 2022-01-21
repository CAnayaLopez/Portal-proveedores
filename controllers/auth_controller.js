const { response, request } = require('express');
const { body } = require('express-validator');
var ActiveDirectory = require('activedirectory');

const login = (req, res = response) => {
    const { user, pass } = req.body;

    console.log(req.body);

    console.log(`Configuración: \nURL: ${process.env.AD_SERVER}\nbaseDN: ${process.env.AD_PRIMARY}`);
    var config = {
        url: process.env.AD_SERVER,
        baseDN: process.env.AD_PRIMARY,
        username: user,
        password: pass
    };  

    var ad = new ActiveDirectory(config);

    ad.authenticate(user, pass, function(err, auth) {
        // if (err) {
        //   console.log('ERROR: '+JSON.stringify(err));
        //   return;
        // }
        
        if (auth) {
            console.log('Autenticado');
            ad.isUserMemberOf(user, process.env.AD_GROUP, function(err, isMember) {
            // if (err) {
            //     console.log('ERROR: ' +JSON.stringify(err));
            //     return;
            // }
            if(isMember){
                console.log(`${user} pertenece al grupo ${process.env.AD_GROUP}`);
                res.status(200).json({
                    user,
                    pass
                });
            }else{
                res.render('login',{
                    errors: [{ 
                        value: "",
                        msg: "No tienes acceso",
                        param: "pass",
                        location: "body"
                    }]
                });
            }
          });
        }
        else {
            console.log('Autenticacion fallida');
            res.render('login',{
                errors: [{ 
                    value: "",
                    msg: "Usuario/Contraseña incorrecta",
                    param: "pass",
                    location: "body"
                }]
            });
        }
    });
    
};

const logout = (req = request, res = response) => {
    res.status(200).json({
        "Hola": "Hola"
    });
};

module.exports = {
  login,
  logout
};
