const {DataTypes} = require('sequelize');
module.exports = function(sequelize,Sequelize){
    var room = sequelize.define('room',{
        ID:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:true
        }
    }
    );
    room.associate  = (models)=>{
        room.hasMany(models.user);
    }
    return room;
}