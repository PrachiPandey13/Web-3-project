const mongoose = require("mongoose");
const nftschema = new mongoose.schema({
    title:{
        type: String,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },
    category: String,
    email: String,
    address: String,
    createdat: {
        type: Date,
        default: Date.now(),
    },
    image:String,

    
});

const nft = mongoose.mode("nft",nftschema);
module.exports = nft;