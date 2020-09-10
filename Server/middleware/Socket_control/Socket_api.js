var db = require('../../models/index');
var hash = require('sha1');
exports = module.exports = async function(io){
    var Roomlist=[];
    io.on('connection',(socket)=>{
        socket.on('create_room',async(room,password,UID)=>{
            if(Roomlist[room]==null){
                Roomlist[room]=password;
                var room=await CreateRoom(room,password,UID);
                await JoinRoom(UID,room);
                socket.join(room);
                socket.emit('join_success');
            }
            else{
                socket.emit('alr_exist');
            }
        });
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
