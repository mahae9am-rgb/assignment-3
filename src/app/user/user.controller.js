
const userService = require('./user.service')
//q1
const signup = async(req,res)=>{
  try{
    const {email,name,password}=req.body
    const userAdd = await userService.signup({email,name,password})
    res.status(201).json({
      message:"user add successfully",
      data:userAdd
    })

  }catch(error){
    console.log(error);
    res.status(400).json({
      message:error.message
    })
    
  }
}

//q2
const createOrUpdate =async(req,res)=>{
 try{
 const id = req.params.id
  const{name,email,age,role}= req.body
 const createdUser= await userService.createOrUpdate({id,name,email,age,role})
 res.status(201).json({
  message:"User Created or updated Successfully",
  success:true,
  data:createdUser

 })
 }catch(error){
  console.log(error);
  
 }
}


//q3
const getUsers = async(req,res)=>{
  try{
    const {email}= req.query
   const usersGet =  await userService.getUserByEmail(email)
   res.status(200).json({
    user:{
      id:usersGet.id,
      name:usersGet.name,
      email:usersGet.email,
      role:usersGet.role,
      createdAt:usersGet.createdAt,
      updatedAt:usersGet.updatedAt
    }
   })

  }catch(err){
    console.log(err);
    res.status(404).json({message:err.message})
    
  }
  
}
//q4
const getAllUserById = async(req,res)=>{
  try{
    const id=req.params.id
  const existUser =  await userService.getAllUsersById(id)
res.status(201).json({

    id:existUser.id,
    name:existUser.name,
    email:existUser.email,
    createdAt:existUser.created_At,
    updatedAt:existUser.updated_At

  
})

  }catch(error){
    console.log(error);
    res.status(404).json({message:error.message})
  }
}
module.exports = {signup,createOrUpdate,getUsers,getAllUserById}
