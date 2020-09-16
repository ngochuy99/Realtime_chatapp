var express= require('express');    
var router = express.Router();
require('dotenv').config();
var room = require('../middleware/room');
router.get('/listroom',async function(req,res){
    try {
      var roomlist = await room.GetRoomList();  
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
        var attendances= await room.GetAttendances(req.body.room_name);
        res.status(200).json(attendances);
        console.log(attendances);
    }
    catch(err){
        res.status(500).json(err);
        throw err;
    }
})

module.exports=router;