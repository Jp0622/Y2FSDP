const express = require("express");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const admin = express.Router();
const models = require('../models');

//admin login 
admin.post("/login",async (req, res) => {
  var admin = await models.admin.findAll({where:{
    admin_account: req.body.admin_account,
    admin_password: req.body.admin_password
  }})
  console.log(admin)
  if(admin.length===0) {
     res.json({msg:'Admin does not exist!'})
  } else {
     res.json({msg:'Login Successful',code:200})
  }
});

module.exports = admin
