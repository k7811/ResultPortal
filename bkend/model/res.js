let mongoose =require("mongoose")
let ressch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "phno":String,
    "gen":String,
    "sub1":Number,
    "sub2":Number,
    "sub3":Number,
    "sub4":Number
})
let resmodel=new mongoose.model("result",ressch)
module.exports=resmodel