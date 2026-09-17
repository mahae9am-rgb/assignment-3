const express = require('express')

const sequelize=require('../src/app/common/db/sequelize.js')
const userRoute = require ('../src/app/user/user.route.js')
const postRoute = require('../src/app/blog/post.route.js')
const commentRoute= require('../src/app/comment/comment.route.js')
require('../src/app/common/associations.js')
const app= express()
app.use(express.json())
app.use('/users',userRoute)
app.use('/posts',postRoute)
app.use('/comments',commentRoute)
async function startServer(){
   try{
 sequelize.authenticate()
console.log('database connected');


   }catch(error){
    console.log('somthin wrong',error);
    
   }
}
startServer()

app.listen(6700,()=>{
    console.log('start running 6700');
    
})
