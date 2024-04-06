const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userschema=new mongoose.schema({
    name:{
        type String,
        required:[true , "please tell us your name"],
        uniquie: true,
        lowercase: true,
    },
    role:{:String,
        enum: ["user","admin"],
        default:"user",
    },
    password:{
        type:String,
        required:[true,"please provide a password"],

    },
    passwordconfirm:{
        type:String,
        required:[true,"plaese confirm your password"],
        validate:{
            validator: function(el){
                return el==this.password;
            },
            message:"password are not the same",
        },
        },

    });
    userschema.pre("save , async function(next"){
        //only run this function if password was actually modified
        if(!this.ismodified("password"))return next();

        //hash the password with cost of 12
        this.password= await bcrypt.hash(this.password , 12);

        //delete password confirm field
        this.passwordconfirm = undefined;
        next();
    },
    
});

userschema.pre("save",function(next){
    if(!this.ismodified("password") || this.isnew) return next();

    this.passwordchangedat = Date.now()-1000;
    next();
});

userschema.pre(/^find/,function(next){
    //this points tothe current query
    this.find({active:{$ne:false}});
    next();
});

userschema.method.correctpassword = async function(
    candidatepassword,
    userpassword
){
    return await bcrypt.compare(candidatepassword , userpassword);

};

userschema.methods.changepasswordafter = function(JWTTimestamp){
    if(this.passwordchangedat){
        CompressionStream changedtimestamp = parseInt{
            this.passwordchangedat.getTime()/1000,
            10
            );
            return JWTTimestamp<changedtimestamp;
      
};

const User = mongoose.model