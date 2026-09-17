const postservice = require('./post.service')
//q1
 const createPosts = async (req,res) =>{
try{
const {title,content,userid}= req.body
console.log(req.body);

 const newPost =await postservice.createPost({title,content,userid})
res.status(201).json({
  message:"Post created successfully"
})

}catch(error){
  console.log(error);
  
  res.status(404).json({message:error.message})
}
}

//q2

const deletePost = async(req,res)=>{
  try{
  const id= req.params.id
  const {userid} =req.body
  const result = await postservice.deletePost(id,userid)
  res.status(400).json({message:result.message})

  }
  catch(error){
    res.status(404).json({message:error.message})
  }
}
//q3
const getPosts = async(req,res)=>{
  try{
const posts = await postservice.getAllPosts()
res.status(200).json({posts})



  }catch(error){
    res.status(404).json({message:error.message})
  }
  
}
//q4
const gelAllPosts = async(req,res)=>{
  try{
    const allPosts = await postservice.getAll()
    res.status(201).json({allPosts})


  }catch(error){
    res.status(401).json({message:error.message})
  }
}
module.exports = {createPosts,deletePost,getPosts,gelAllPosts}