//fs model to read the data
const fs=require("fs");

const express = require("express");

const app = express();

//make request on api to get data
app.get('/',(req,res)=>{
    res.status(200).send("hello I am nft marketplace api");
});

app.get('/',(req,res)=>{
    res
    .status(200)
    .json({
        message: "hello I am nft marketplace api",
        api: "NFT marketplace",
});
});

//post method
app.post('/',(req,res)=>{
    res.status(201).json({})
    message: "your data",
});
});

const nfts = fs.readfilesync('${_dirname}/nft-data/data/nft-simple.json');


app.get("/api/v1/nfts",(req,res)=>{
    res.status(200).json({
        status:"success",
        results: nfts.length,
        data:
    });
});

app.post("/api/v1/nfts",(req,res)=>{
    console.log(req);
    res.send("post nft");
});

const port = 3000;
app.listen(port ,()=>{
    console.log("app running on port ${port}....");
});

//getrequest

api.get('/api/v1')
    res.status(200).json({
        status:"success",
        data:{},
    });
});

const port =3000;
app.listen(port, ()=>{
    console.log('app running on port ${port}....');
})

const newid=nfts[nfts.length-1]+1;
const newnfts=Object.assign({id:newID},req.body);

nfts.push(newnfts);

fs.writeFile('${_dirname}/nft-data/data/nft-simple.json', JSON.stringify(nfts), err=>{
    res.status()
    status:"success";
})
res.send("post nfts");

//delete and update method api
//patch method
//put updates the entire data

app.patch("/api/v1/nfts/:id" , (req,res)=>{

    if(req.params.id*1>nfts.length){
        return res.status(404).json({
            status:"fail",
            message:"Invalid ID",
        });
    }
    res.status(200).json({
        status:"success",
        data:{
            nft:"updating nft",
        },
    });
});

//delete method

//connecting to cloud server
 Node_ENV=development
 PORT=3000
 User=Prachi
 DATABASE=
 w=
 DATABASE_PASSWORD=nft12345

 const dotenv = require("dotenv");
 const mongoose = require("mongoose");
 const app=require("./app");

 const DB=process.env.DATABASE.replace("<PASSWORD>"
 process.env.DATABASE_PASSWORD)

 mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:true,
 })
 .then((con)=>{
    console.log(con.connection);
    console.log("DB connection successfully");
 })
 })

 //creating documents in cloud database
 const nftschema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "A nft must have a name"],
        unique: true,
    },
    rating: {
        type: Number,
        default: 4.5,

    } 
    price: {
        type:Number,
        required: [true , "a nft must ahve a price"]
    },
 });

 const NFT = mongoose.model("NFT", nftSchema);
 //creating document or data in our database
 const testnft = new NFT({
    name:"the crazy women",
    rating: 3.2,
    price: 567
 })

//it will save the document in our database and it will return a promise
 testnft.save().then(doc nft => {
    console.log(docnft)
 }).catch(error)=>{
    console.log("error:",error);
 });

 const port = process.env.PORT || 3000;
 app.listen(port ,()=>{
    console.log('app running on port ${port}....');
 });

 //api filter
 const nfts = await nft.find(req.query);
//all the filetr system , we'll apply on the promises and not on actual data

 const queryobj={...req.query}
 const excludedFields = ["page", "sort" , "limit" , "fields"];
 excludedFields.forEach(el=>delete.queryObj[el])

 console.log(req.query,query);
 console.log(query)
 //{difficulty:"easy" , duration:{$gte:5}}
  //{difficulty:"easy" , duration:{gte:'5'}}

  //Advance filtering query
  let querystr = JSON.stringify(queryObj);
  query.Str.replace(/\b(gte|gt|lte|lt)\b/g,match=>'$${match}')
  console.log(JSON.parse(queryStr));
  






