const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
console.log("Mongose Atlas Connection Successfull!!!")
}).catch((err)=>{
    console.log("MongoDB Connection Failed!!!")
    console.log(err)
})