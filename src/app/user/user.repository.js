const user = require('./user.model')//module.exports = {findByEmail ,createUser}
//q1
async function findByEmail(email) {
   return await  user.findOne({where:{email:email}})
    
}
//q2
async function createUser(data) {
    const newUser=  user.build(data)
    await newUser.save()
    return newUser

    

}
//q2
async function findUserById(id) {
    return await user.findOne({where:{id:id}})

}


async function createOrUpdate(data) {
    const createdUser= await user.upsert(data,{validate:false})
    return createdUser
}

//q3
async function getUserByEmail(email) {
    const users = await user.findOne({where:{email:email}})
    return users
}
//q4
async function getAllUsersById(id) {
   const userId= await user.findOne({where:{id:id}})
    return userId
}
async function findOrCreate(userid,postid,content) {
    return await comment.findOne({ where:{userid,postid,content}})
    
}
module.exports = {findUserById,createOrUpdate,createUser,findByEmail,getUserByEmail,getAllUsersById,findOrCreate}