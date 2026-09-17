
// put users 
// url ('/user)
// url ('/user/user:id')
const {Router}= require('express')
const router= Router()
const usercontroller = require('./user.controller')
//q1
router.post('/signup',usercontroller.signup)
//q2
router.put('/:id',usercontroller.createOrUpdate)
//q3
router.get('/by-email',usercontroller.getUsers)
//q4
router.get('/:id',usercontroller.getAllUserById)
module.exports= router