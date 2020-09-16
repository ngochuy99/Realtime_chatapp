const db= require('../models/index');

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
module.exports={GetRoomList,GetAttendances}