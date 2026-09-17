require('dotenv').config()
const userrepositry = require('../../user/user.repository')
const JWT = require('jsonwebtoken')


   const authGuard =async(req,res,next)=>{
 try{
   const authorization = req.headers.authorization
    if(!authorization){res.status(401).json({message:'no token '})}
    let token = authorization.split(' ')[1]
    let payload = JWT.verify(token,process.env.JWT_SECRET)
    let userExist = userrepositry.checkuserExistById(payload.id)
    if(!userExist){res.status(401).json({message:'user not exist'})}
    req.user=payload.id
    console.log('req.user is:', req.user)
    next()
 }catch(err){
    console.log(err);
    
    
    res.status(500).json({message: 'invalid'})
        
 }
  


}
module.exports= { authGuard}