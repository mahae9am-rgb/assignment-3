const commentservice =require('./comment.service')

//q1
const createBulkComments = async(req,res)=>{
    try{
const {comments}= req.body
if(comments&&Array.isArray(comments)){
const newComments = await commentservice.createBulkComments(comments)
res.status(201).json({
    message:"comments created",
    data:newComments
})
}

    }catch(error){
console.log(error);
res.status(404).json({message:error.message})

    }
    
}
//q2

const createComment = async(req,res)=>{
    try{
const{content,postid,userid} = req.body

    const comments = await commentservice.createComments(content,postid,userid)
    res.status(201).json({
        message:"comments created",
        data:comments,
        success:true
    })

    }catch(error){
        console.log(error);
        res.status(404).json({message:error.message})
        
    }
}
//q3
const updated = async(req,res)=>{
    try{
        const {id} =req.params
        const {userid,content}= req.body
        const updateComments = await commentservice.updateComment(id,userid,content)
        res.status(201).json({message:updateComments.message})

    }catch(error){
        res.status(404).json({message:error.message})
    }
}

//q4
const createdComments = async(req,res)=>{
    try{
const {userid,postid,content} = req.body
    const trueCreated =await commentservice.checkCommentsById(userid,postid,content)
    res.status(201).json({message:trueCreated})
}

    catch(error){
        res.status(404).json({message:error.message})
    }
}

const getAllSpecficWord = async(req,res)=>{
   try{
    const {word} = req.query
    const result2 =await commentservice.searchByWord(word)
    res.status(201).json(result2)
   }catch(error){
    res.status(404).json({message:error.message})
   }
}
//q5
const getAllComments = async(req,res)=>{
    try{
        const {postid}= req.params
const response = await commentservice.getNewestComments(postid)
res.status(200).json({response})

    }catch(error){
        res.status(404).json({message:error.message})
    }
}

//q6
const commentsByPk = async(req,res) => {
    try{
    const{id} = req.params
    const commenDetails = await commentservice.comments(id)
    res.status(200).json({commenDetails})
    }catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}






module.exports={createComment,createBulkComments,
 updated,createBulkComments,createdComments,getAllSpecficWord,getAllComments,commentsByPk}