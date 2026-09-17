const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authrepositry = require('./auth.repository')

const login = async (email, password) => {
  let userExist = await authrepositry.checkUser(email)
  if (!userExist) { throw new Error('Invalid credentials') }

let match = await bcrypt.compare(password, userExist.password)  
  let token = JWT.sign(
    { id: userExist.id, name: userExist.name },
    process.env.JWT_SECRET,
    { expiresIn: "9h" }
  )
  return token
}

module.exports = { login }