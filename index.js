//loads .env files contents into process .env by default
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

//creating server instance
const pfserver=express()

//configuring cors into server
pfserver.use(cors())

//configuring json conversion on server
pfserver.use(express.json())

//configuring routes to server
pfserver.use(router)

//serving upload files to client side
pfserver.use('/Uploads',express.static('./Uploads'))

const PORT=3001

//calling listen method to impliment listen mode for server to run
pfserver.listen(PORT,()=>{
    console.log(`server is Running at:${PORT}`)
})


//setting response for base_url get request
pfserver.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request HIT successfully</h1>")
})