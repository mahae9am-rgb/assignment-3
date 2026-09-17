
const express = require('express')
const router =  express.Router()
const postcontroller = require('./post.controller')
//q1
router.post('/',postcontroller.createPosts)
//q2
router.get('/details',postcontroller.getPosts)
//q3
router.delete('/:id',postcontroller.deletePost)
//q4
router.get('/commenctcount',postcontroller.gelAllPosts)

module.exports = router