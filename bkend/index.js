let express=require("express")
let mongoose=require("mongoose")

let cors=require("cors")
const route = require("./route/rout")
let app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/resportal1").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.listen(5000)