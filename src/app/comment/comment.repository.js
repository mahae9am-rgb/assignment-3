const {Op, Model}= require('sequelize')
const comment =require('./comment.model')
const User = require('../user/user.model')
const post = require('../blog/post.model')
//q1
async function findCommentById(id) {
    return await comment.findOne({where:{id}})
    
}
//q2
async function createCommentsById(data) {
    return await comment.create(data)
}

async function createNewComments(data) {
    return await comment.bulkCreate(data)
    
}

async function updateCommentsById(id) {
    return await comment.findOne({where:{id}})
    
}
async function updateCommentsById(commentInstance,newContent) {
    commentInstance.content = newContent
    return await commentInstance.save()
    
}
//q3
async function findOrCreate(userid,postid,content) {

    return await comment.findOne({where:{userid,postid,content}})
    
}
//q4
async function searchCommentsByWord(word) {
    return await comment.findAndCountAll({
        where:{content:{
            [Op.substring]:word
        }}
    })
    
}
//q5
async function getAll(postid) {
    return await comment.findAll({
        where:{postid},
        order:[['created_At','DESC']],
        limit:3
    })
}
//q6
async function getCommentsByPk(id) {
    return await comment.findByPk(id, 
{
        includes:[{
            model:User,
            attributes:['id','name','email']
     },{
        model:post,
        attributes:['id','title','content']
     }]
    })
    
}

module.exports ={ findCommentById,createCommentsById ,createNewComments,
               updateCommentsById,findOrCreate,searchCommentsByWord,getAll,getCommentsByPk}