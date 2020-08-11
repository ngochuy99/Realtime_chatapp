const { DataTypes } = require("sequelize");
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
            allowNull:false
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Email:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return User;
}