
    //q3
    {
    const express = require('express')
const fs=require('node:fs/promises')
const app = express()
app.use(express.json())//chunks , body >>json obj
app.delete('/user/:id',async(req,res)=>{
 let id = Number(req.params.id)
 let users = JSON.parse(await fs.readFile('tasks/users.json',{encoding:"utf-8"}))
let idusers  = users.find((user)=> user.id===id)
if(!idusers){
     return res.status(409).json({
        message:"user id not found "
    })
}

    users = users.filter((user)=>user.id !==id)
    await fs.writeFile('tasks/users.json',JSON.stringify(users))
    res.status(200).json({
        message:"user deleted successfully"
    })


})
    app.listen(4897,()=>{
        console.log("done");
        
    })
}