const jwt=require('jsonwebtoken')


const jwtMiddleswareFun=(req,res,next)=>{
    console.log("Inside JwtMiddleware")
    try{

        const token=req.headers.authorization.split(" ")[1]
        console.log(token)
        if (token) {
            const result=jwt.verify(token,process.env.secret_key)
            console.log(result);
            req.payload=result.userId 
            next()
        }else{
            res.status(406).json("Please Loging First!!")
        }
   


    }catch(err){
        console.log(err)
        res.status(406).json("please Login")
    }
    
}

module.exports=jwtMiddleswareFun