const { DataTypes } = require("sequelize");
const room = require('./room');
module.exports=function(sequelize,Sequelize){
    var User=sequelize.define("user",{
        ID:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        Name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Email:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    User.associate  = (models)=>{
        User.belongsTo(models.room); // A BelongsToMany B through the junction table C
    }
    return User;
}