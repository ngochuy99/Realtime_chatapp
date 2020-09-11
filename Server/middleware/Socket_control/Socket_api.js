var db = require('../../models/index');
var hash = require('sha1');
const { Op } = require("sequelize");
exports = module.exports = async function(io){
    io.on('connection',(socket)=>{
        socket.on('create_room',async(room,password,UID)=>{
            try{
                var Foundroom=await CreateRoom(room,password,UID);
                await JoinRoom(UID,Foundroom);
                socket.join(room);
                socket.emit('create_success');
            }
            catch(error){
                socket.emit('alr_exist');
                throw error;
            }
        });
        socket.on('join_room',async(room,password,UID)=>{
            try{
                var Foundroom = await FindRoom(room,password);
                await JoinRoom(UID,Foundroom)
                socket.join(room);
                socket.emit('join_success');
            }
            catch(err){
                socket.emit('wrong_room_pass');
                throw err;
            }
        })
    });
}
let CreateRoom = async function(name,password){
    var room = await db.room.create({
        name:name,
        password:await hash(password),
    });
    return room;
}
let JoinRoom = async function(UID,room){
    var user = await db.user.findOne({
        where:{
            ID:UID
        }
    });
    user.setRoom(room.ID);
}
let FindRoom = async function(roomname,password){
    try{
        var room = await db.room.findOne({
            where:{
                [Op.and]:[{name:roomname},{password:await hash(password)}]
            }
        });
        return room;
    }
    catch(err){
        throw err;
    }
}
