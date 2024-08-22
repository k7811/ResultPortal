const resmodel = require("../model/res")

let add=async (req,res)=>{
    try{
        let data=new resmodel(req.body)
        await data.save()
        res.json({"msg":"data added"})
    }
    catch(e){
        res.json({"msg":"not added"})
        console.log(e)
    }
}

let getdata=async(req,res)=>{
    try{
        let data=await
        resmodel.find({})
        res.json(data)
    }
    catch(e){
        console.log(e)
    }
}

let getres=async(req,res)=>{
    try{
        let data=await
        resmodel.findById({"_id":req.params.hno})
        res.json(data)
    }
    catch(e){}
}
let del=async(req,res)=>{
    try{
      let data= await resmodel.findByIdAndDelete({"_id":req.params.hno})
      res.json(data)
    }
    catch(e){}
}
module.exports={add,getdata,getres,del} 