let mongoose = require("mongoose");
let userModel = require("../models/userModel");
let crypto = require('crypto');
let jwt = require('jsonwebtoken');


exports.findAllUsers = function(req, res) {
  //GET
  userModel.find(function(err, users) {
    if (err) res.send(500, err.message);
    res.status(200).jsonp(users);
  });
};

exports.findById = function(req, res) {
  userModel.findById(req.params.id, function (err, user) {
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(user);
  });
};
  //POST
  exports.addUser = function(req, res) {
    let user = new userModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      peso: req.body.peso,
      altura: req.body.altura,
      rol: req.body.rol,
      tabla: req.body.tabla
    });

    user.save(function (err, user) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(user);
    });
  };

    //DELETE
    exports.deleteUser = function(req, res) {
      userModel.findById(req.params.id, function(err, user) {
        user.remove(function(err) {
          if(err) return res.status(500).send(err.message);
          res.status(200).send();
        })
      });
    };
//PUT
exports.updateUser = function(req, res) {
  userModel.findById(req.params.id, function(err, user) {
    user.username   = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.peso = req.body.peso;
    user.altura = req.body.altura;
    user.rol = req.body.rol;
    user.tabla = req.body.tabla;


    user.save(function(err) {
      if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(user);
    });
  });
};
//GET
exports.getUserToken = function(req, res) {
  if (req.body.username !== null && req.body.pass !== null) {
    let token;
    let usernam = req.body.username;
      let pass = crypto
        .createHash("sha256")
        .update(req.body.pass)
        .digest("hex");
    userModel.findOne({username: usernam, password: pass}, function (err, resp) {
      console.log(resp!==null);
      if (resp!==null) {
        if (err) res.send(500, err.message);
          if (resp.username === usernam && resp.password === pass) {
            //JWT
            let data = {
              username: resp.username,
              rol: resp.rol,
              altura: resp.altura,
              peso: resp.peso,
              tabla: resp.tabla,
              email: resp.email,
              authorized: true
            };
            token = jwt.sign(data, 'pr<~%SuT:~bV8G8[u5q_!vF-a,v5~as39>uW7~j;p=Hh`4K[ScD4fh>2vA9B.3NP=4ER5~+', {
              expiresIn: 60 * 60 * 24 * 7 // 7 días
            });
            res.status(200).jsonp(token);
          } else {
            let unauth = {
              authorized: false
            };
            res.status(401).jsonp(unauth);
          }
      }else {
        let unauth = {
          authorized: false
        };
        res.status(401).jsonp(unauth);
      }
    });
  }
};
exports.checkAuth = function (req, res) {
  let token = req.headers['authorization'];
  if(!token){
    res.status(401).send({
      error: "Es necesario el token de autenticación"
    });
    return
  }

  token = token.replace('Bearer ', '');

  jwt.verify(token, 'pr<~%SuT:~bV8G8[u5q_!vF-a,v5~as39>uW7~j;p=Hh`4K[ScD4fh>2vA9B.3NP=4ER5~+', function(err, user) {
    if (err) {
      res.status(401).send({
        error: 'Token inválido'
      })
    } else {
      res.status(200).jsonp(user);
    }
  })
};


