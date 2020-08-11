var express = require('express');
var router = express.Router();
var hash=require('sha1');
//Hash algorithm for password is sha1
var db = require("../models/index");
const { Op } = require("sequelize");

router.post('/login', async function(req, res) {
  try {
    var user_info=await Checklogin(req.body);
    res.status(200).json({
      Name:user_info.Name,
      Email:user_info.Email
    });
  } 
  catch (error) {
    res.status(500).json({
      error:"Wrong username or password"
    });
    throw error;
  }
});

router.post('/register',async function(req,res){
  try {
    await Register(req.body);
    res.status(200).json({
      message:"success"
    });
  } 
  catch (error) {
    res.json({
      message:error
    });
    throw error;
  }
})
let Checklogin=async function(user_info){
  var hashPass=await hashPassword(req.body.Password);
    var user_info=await db.user.findAll({
      attributes:['Name','Username','Password','Email'],
      where:{
        [Op.and]:[{Username:req.body.Username},{Password:hashPass}]
      }
    });
    return user_info;
}

let Register =async function(user_info){
  var hashPass=await hashPassword(user_info.Password);
  await db.user.create({
    Name:user_info.Name,
    Username:user_info.Username,
    Password:hashPass,
    Email:user_info.Email
  });
}

let hashPassword=async function(Password){
    return hash(Password);
}
module.exports = router;
