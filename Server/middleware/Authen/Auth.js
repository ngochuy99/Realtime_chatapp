"use strict"
var jwt=require('./Jwt');
let checkAuth = async function(req,res,next){
    const token=req.body.token||req.headers.token;
    if(token){//Check for token in headers or body
        try {
            var decoded=await jwt.verify_access(token);
            next();    
        }
        catch (error) {//Token not valid or expired
            res.status(401).json({
                message:"Unauthorized"
            });
        }
    }
    else{//No token detach in body or header
        res.status(403).json({
            message:"no token provided"
        });
    }
}
module.exports={
    checkAuth
}