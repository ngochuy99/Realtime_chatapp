'use strict'
var jwt=require('jsonwebtoken');
require('dotenv').config();

let generate_token=async function(user_info,Secret_token,expiresTimes){
    try {
        const token = await jwt.sign(user_info,Secret_token,{expiresIn:expiresTimes});
        return token;
    } 
    catch (error) {
        throw error;        
    }
}
let verify_access=async function(token){
    try {
        const decoded = await jwt.verify(token,process.env.Secret_token);
        return decoded;
    } 
    catch (error) {
        throw error;
    }
}

let verify_refresh=async function(token){
    try {
        const decoded = await jwt.verify(token,process.env.Refresh_secret);
        return decoded;
    }
    catch (error) {
        throw error;
    }
}
module.exports={
    generate_token,verify_access,verify_refresh
}