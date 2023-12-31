const jwt=require("jsonwebtoken")

module.exports=function(req,res,next){
const token=req.header('auth')
if(!token) return res.status(400).json("Acess denied")
try{
const verified=jwt.verify(token,process.env.TOKEN_SECRET)
req.user=verified
next()
}
catch(err){
res.status(400).json("invalid token")
}
}
