const express = require("express");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const user = express.Router();
const nodemail = require("../nodemailer")
const models = require('../models');

user.get("/getUser",async (req, res) => {
    var users = await models.users.findAll()
    res.send(JSON.stringify(users))
});

user.get("/getUserById/:id",async (req, res) => {
  var user = await models.users.findByPk(req.params.id)
  res.json({code:200,data: user})
});

user.post("/deleteUser/:id",async (req, res) => {
  var user = await models.users.findByPk(req.params.id)
  user.destroy()
  res.json({msg:'删除成功',code:200})
});

user.post("/editUser/:id",async (req, res) => {
  var user = await models.users.findByPk(req.params.id)
  user.update(req.body)
  res.json({msg:'修改成功',code:200})
});

user.post("/register",async (req, res) => {
    var user = await models.users.create(req.body)
    res.json({user:user,code:200})
});

user.post("/login",async (req, res) => {
   var user = await models.users.findAll({where:{
     user_account: req.body.user_account,
     user_password: req.body.user_password
   }})
   console.log(user)
   if(user.length===0) {
      res.json({msg:'User not exists',code: 400})
   } else {
      res.json({msg:'Login Successful',code: 200,data: user[0]})
   }
});

user.get("/email", multipartMiddleware, async (req, res) => {
    console.log(req.query)
    let mail = {

        from: 'jiapengss22@gmail.com',
        subject: 'Registration verification code',
        to:req.query.email,
        text: 'verification code:'+req.query.randomNum
    }
    await nodemail(mail) 
    res.json({ code: 200, message: 'Sent' });
  });

module.exports = user
