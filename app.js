const express = require("express");
const cors = require("cors");

const nftrouter = require("./Api/Routers/nftRouter");
const userrouter = require("./Api/Routers?userRouter");

//MIDDLEWARE
const app=express();
app.use(express.json({limit:"100kb"}));

app.use(cors());
app.options("*",cors());

//Routes
app.use("/api/v1/NFTs",nftRouter);
app.use("/api/v1/user",userRouter);

module.exports = app;
