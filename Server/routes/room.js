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
let GetRoomList = async function(){
    var roomlist = await db.room.findAll({
        raw: true,
        attributes:['name'],
    });
    return roomlist;
}
module.exports=router;