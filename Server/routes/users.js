var express = require('express');
var router = express.Router();
var hash=require('sha1');
//Hash algorithm for password is sha1
var db = require("../models/index");
require('dotenv').config();
const { Op } = require("sequelize");
const { user } = require('../models/index');
var jwt=require('../middleware/Authen/Jwt');

router.post('/login', async function(req, res) {
  try {
    var user_info=await Checklogin(req.body);
    var accessToken=await jwt.generate_token(user_info[0],process.env.Secret_token,process.env.accessexpiresTimes);
    var refreshToken=await jwt.generate_token(user_info[0],process.env.Refresh_secret,process.env.refreshexpiresTimes);
    res.status(200).json({
      Name:user_info[0].Name,
      Email:user_info[0].Email,
      accessToken:accessToken,
      refreshToken:refreshToken
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

router.post('/refreshtoken', async function(req,res){
  try {
    var decoded = await jwt.verify_refresh(req.body.token);
    var accessToken=await jwt.generate_token({Name:decoded.Name,Email:decoded.Email},process.env.Secret_token,process.env.accessexpiresTimes);
    res.status(200).json({
      accessToken:accessToken
    });
  } 
  catch (error) 
  {
    res.status(403).json({
      message:"Refresh_token invalid"
    });
    throw error;
  }
})

let hashPassword=async function(Password){
    return hash(Password);
}

let Checklogin=async function(user_info){
  var hashPass=await hashPassword(user_info.Password);
    var user_info=await db.user.findAll({
      raw: true,
      attributes:['Name','Email'],
      where:{
        [Op.and]:[{Username:user_info.Username},{Password:hashPass}]
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
module.exports = router;
