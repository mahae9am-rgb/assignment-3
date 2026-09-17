const post = require('./post.model')
const User = require('../user/user.model')
const Comment =require('../comment/comment.model')
const sequelize = require('../common/db/sequelize')
//q1
async function findPostById(id) {
  return  await post.findOne({where:{id:id}})
    
}
async function createPost(data) {
    const newPost = post.build(data)
   return await newPost.save()
}
//q2
async function deletePostById(post) {
  return await post.destroy()
  
}
//q3
async function getAllPostWithDetails() {
  return await post.findAll({
    attributes:['id','title'],
    include:[{
      model:User,
      attributes:['id','name']},
      {
        model:Comment,
        attributes:['id','content']
      }
    ]

    }) 
}
//q4
async function getAllPostsContactNumber() {
  return await post.findAll({
    attributes:['id','title',[
      sequelize.fn('COUNT',sequelize.col('Comments.id')), 
      'comments_count'
    ]],
    include:[{
      model:Comment,
      attributes:[]
    }
    ],

group:['Post.id']
})

}

module.exports = {findPostById,createPost,deletePostById,getAllPostWithDetails,getAllPostsContactNumber}
