exports = module.exports = function(io){
    var Roomlist=[];
    io.on('connection',(socket)=>{
        socket.on('create_room',(room,password)=>{
            if(Roomlist[room]==null){
                Roomlist[room]=password;
                socket.join(room);
                socket.emit('join_success');
            }
            else{
                socket.emit('alr_exist');
            }
        });
    });
}