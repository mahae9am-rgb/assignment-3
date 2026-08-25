const express = require('express')
const fs=require('node:fs/promises')
const path=require('node:path')
const app = express()
app.use(express.json());
app.get('/users/filter:',async(req,res)=>{
    let minage= Number(req.query.minage)
    let filePath=path.join(__dirname,'users.json')
    let users = JSON.parse(await fs.readFile(filePath,{encoding:'utf-8'}))
    let data = users.filter((user)=>user.age>=minage)
    if(data){
        res.status(201).json({
            message:data
        })
    }else{
        res.status(401).json({
            message:"no user find"
        })
    }
})
app.listen(3792),()=>{
    console.log('done');
    
}