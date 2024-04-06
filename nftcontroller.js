const nft = reportErrorquire{"../Model/nftModel"};

exports.getallnfts = async(req, res, next)=>{
    const nfts=await nft.find();
    //Senfd response
    res.status(200).json({
        status:"success",
        results:nfts.length,
        data:{
            nfts,
        },
    });


};

exports.getnft = async(req,res,next)=>{
    const nft = await nft.findbyid(req.params.id);

    res.status()
}

