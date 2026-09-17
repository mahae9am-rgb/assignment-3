const postrepository= require('./post.repository')
//q1
async function checkPostExistById(id) {
const postId = await postrepository.findPostById(id)
  if(postId){throw new Error('post already Exist')}
  
}

async function createPost(data) {
  return  await postrepository.createPost(data)

}
//q2
async function deletePost(id,userid) {
const postdelete = await postrepository.findPostById(id)

if(!postdelete)

{throw new Error('post not found')}

if(postdelete.userid!==Number(userid))

{throw new Error('you are not authroized to delete this post')}
 
await postrepository.deletePostById(postdelete)
return {message:"post deleted"}

}
//q3
async function getAllPosts() {
  return await postrepository.getAllPostWithDetails()

  
}
//q4
async function getAll() {
  return await postrepository.getAllPostsContactNumber()
  
}
module.exports={checkPostExistById,createPost,deletePost,getAllPosts,getAll}