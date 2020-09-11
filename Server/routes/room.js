var express= require('express');    
var router = express.Router();
require('dotenv').config();
var db = require('../models/index');

router.get('/listroom',async function(req,res){
    try {
      var roomlist = await GetRoomList();  
      res.status(200).json({
          roomlist:roomlist
      });
    } 
    catch (error) 
    {
        res.status(500);
        throw error;
    }
})
router.post('/attendances',async function(req,res){
    try{
        var attendances= await GetAttendances(req.body.room_name);
        console.log(attendances);
    }
    catch(err){
        res.status(500).json(err);
        throw err;
    }
})
let GetRoomList = async function(){
    var roomlist = await db.room.findAll({
        raw: true,
        attributes:['name'],
    });
    return roomlist;
}
let GetAttendances = async function(room_name){
    var room = await db.room.findOne({
        where:{
            name:room_name
        },
        attributes:['ID']
    });
    var attendances = await db.user.findAll({
        raw:true,
        attributes:['Name'],
        where:{
            roomID:room.ID
        }
    });
    return attendances;
}
module.exports=router;