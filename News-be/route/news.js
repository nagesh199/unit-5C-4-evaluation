const {Router} = require("express");
const {News} = require("../db")

const newsRouter = Router()

newsRouter.get("/get",async(req,res)=>{
   const news = await News.find();
   return res.json(news)
});

newsRouter.get("/",async(req,res)=>{
    const {pageNo,perPage} =req.query;
    const news = await News.find().limit(perPage);
    return res.json(news)
 });
 
newsRouter.get("/get/query",async(req,res)=>{
    const params = req.query
    const news = await News.find(params)
    return res.json(news)
})
newsRouter.get("/get/auther",async(req,res)=>{
    const params = req.query
    const news = await News.find(params)
    return res.json(news)
})
newsRouter.get("/get/tags",async(req,res)=>{
    const params = req.query
    const news = await News.find(params)
    return res.json(news)
})
newsRouter.get("/title/:title",async(req,res)=>{

    const news = await News.find({title:req.params.title});
    return res.json(news)
})
newsRouter.get("/id/:_id",async(req,res)=>{

    const news = await News.find({_id:req.params._id});
    return res.json(news)
})
newsRouter.post("/post", async(req,res)=>{

    const news = new News(req.body);
    try {
        await news.save();
        return res.send(news)
    }
    catch(err){
        return res.status(400).send("connection err")
    }
})
newsRouter.patch("/patch/:_id", async(req,res) => {
    try{
        const news = await News.findByIdAndUpdate(req.params._id,req.body)
        await news.save()

        return res.send(news)
    }catch(error){
        res.status(500).send(error)
    }
})


module.exports = newsRouter