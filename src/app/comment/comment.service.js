const commentrepository = require('./comment.repository')
//q1
async function checkCommentsById(userid,postid,content) {
    
    const comments = await commentrepository.findCommentById(id)
    if(comments){throw new Error('comments already exists')}
//q3
const existComments = await commentrepository.findOrCreate(userid,postid,content)
if(existComments){
    return{ existComments,
    created:false
}
}

const newComment = await commentrepository.createCommentsById({userid,postid,content})
return {newComment,
       created:false}

}

async function createComments(data) {
    return await commentrepository.createCommentsById(data)
}
//q5
async function createBulkComments(data) {
    return await commentrepository.createNewComments(data)

}

//q2
async function updateComment(id,userid,content) {
    const commentNew = await commentrepository.findCommentById(id)
    
 if(!commentNew){throw new Error ('comment not found')}

 if(commentNew.userid!==Number(userid))

 {throw new Error('you are not authrized to update this content')}

await commentrepository.updateCommentsById(commentNew,content)

return {message:"comment updated"}


}
//q4
async function searchByWord(word) {
    const {count,rows} = await commentrepository.searchCommentsByWord(word)
    if(count===0){
    throw new Error('no comments found.')
    }
    return{
        count,
        comments:rows
    }
}

async function getNewestComments(postid) {
    return await commentrepository.getAll(postid)
    
}
//q6
async function comments(id) {
    const checkComment  = await commentrepository.getCommentsByPk(id)
    if(!checkComment){throw new Error('no comment found') }
return checkComment
}



module.exports ={checkCommentsById,createComments,
    createBulkComments,updateComment,
    searchByWord,getNewestComments,comments}