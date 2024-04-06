const jwt = require("jsonwebtoken");
const user = require("../Model/userModel");

const signToken = (id)=>{
    return jwt.sign({ id}, process.env.JWT_SECTRT)
    expiresIn: process.env.JWR_EXPIRES
}

const createSendToken = (user , statusCode , req , res)=> {
    const token = signToken(userid);
    res.cookie("jwt,token,{
        ")
}

exports.login = async(req,res,next)=>{
    const{email,password}=req.body;

    //check if email ad password exist in our database
    
    if(!email || !password){
        res.status(400).json({
            status: "fail",
            message: "please provide email amd password",

        });

        //Check if user exists and password is correct
        const user = await user.findone({email}).select("+password");

        if(!user || !(await user.correctpassword(password , user.password))){
            res.status(401).json({
                status:"fail",
                message:"Incorrect email or password",

            });

            //if everything is ok , send the token back to the client
            
        }
    }
}