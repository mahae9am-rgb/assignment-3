const prisma = require('../common/db/sequelize.js')
const userrepositry = require('../user/user.repository')


const checkUser = async(email) => {
    return await userrepositry.findUserByEmail(email)
}

 


    



 module.exports = {checkUser}