const mongoose = require("mongoose");
const {model,Schema} = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/News");

const Newsschema = new Schema({
    title:String,
    description:String,
    date:Date,
    auther:String,
    location:String,
    tags:String,
    views:Number,
    category:String,

})

const News = model("todo",Newsschema);


module.exports = {connection,News}