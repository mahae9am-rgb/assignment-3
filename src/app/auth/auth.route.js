const {Router}= require('express')
const authcontroller= require('./auth.controller')
const authRouter=Router()
authRouter.post('/login',authcontroller.login)
  module.exports=authRouter