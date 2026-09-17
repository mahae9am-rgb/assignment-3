const userrepositry = require('./user.repository')

//q1
const checkUserByEmail = async(email)=>{
    const userExist = await userrepositry.findByEmail(email)
    if(userExist){
        throw new Error('email already exist')
        
    }

}


   const signup = async(data)=>{
        await checkUserByEmail(data.email)

      const newuser=  await userrepositry.createUser(data)
      return newuser
    

}


//q2
async function createOrUpdate(data) {
const createdUser= await userrepositry.createOrUpdate(data)
return createdUser   
}


//q3
async function ensureExistUserByEmail(email) {
   const userExist= await userrepositry.findByEmail(email)
    if(!userExist){
        throw new Error(' no user found')
    }
}

async function getUserByEmail(email) {
    await ensureExistUserByEmail(email)
    const emailExist =  await userrepositry.getUserByEmail(email)
    return emailExist

}
//q4
async function checkUserById(id) {
   const userId= await userrepositry.findUserById(id)
    if(!userId){throw new Error('no user found')}
}
async function getAllUsersById(id) {
    await checkUserById(id)
    const newUserId = await userrepositry.getAllUsersById(id)
    return newUserId;
}

module.exports = { createOrUpdate,signup,ensureExistUserByEmail,getUserByEmail,checkUserById,getAllUsersById}
