let fs = require('node:fs')
let crypto=require('node:crypto')

process.env.UV_THREADPOOL_SIZE=8
//q1 
function first(){
    console.log("first");
}
setTimeout(()=>{
    console.log('done');
    
},8000)
console.log('hello world');
first()

//q2
//libuv is a C library originally written for Node.js to abstract non-blocking I/O operations

//q3
let data = fs.readFile('file.txt',(err,data)=>{
    console.log(data);
    
})
console.log('end');
//q4
 setTimeout(() => {
   console.log('1');
    
 }, 4000);
 setTimeout(()=>{
    console.log('2');
    
 },1000)
 console.log('3');
 //q5
 console.log('start');
 for(let i=0;i<=5;i++){
    crypto.pbkdf2('12347','c',10000,64,'sha512',(err,data)=>{
        console.log('done');
        
    })
 }
 
//q6
//blocking
let file = fs.readFileSync('file.txt','utf-8') 
    console.log(file)
    console.log('go');
    
//non_blocking
let res=fs.readFile('file.txt',(err,data)=>{
    console.log(data);
    
    console.log('done reading');
    
})
console.log('the end');




//q1
 const express = require('express')
const fs=require('node:fs/promises')
let app = express()
app.use(express.json())//chunks , body >>json js
app.post('/user',async(req,res)=>{
const users = JSON.parse(await fs.readFile('tasks/users.json',{encoding:"utf-8"}))
let emailExist = users.find((user)=> user.email===req.body.email)
if(!emailExist){
users.push(req.body)
await fs.writeFile('tasks/users.json',JSON.stringify(users))
res.status(201).json({
    mess:'created users',
    success:true,
    data:req.body
})
}else{
    res.status(409).json({
        mess:"already exist"
    })
}
})
    app.listen(4009,()=>{
        console.log("done port ");
        
    })

    //q2
    {
    const express = require('express')
const fs=require('node:fs/promises')
const app = express()
app.use(express.json())//chunks , body >>json obj
app.patch('/user/:id',async(req,res)=>{
 let id = Number(req.params.id)
 let users = JSON.parse(await fs.readFile('tasks/users.json',{encoding:"utf-8"}))
let emailExist  = users.find((user)=> user.id===id)
if(!emailExist){
     return res.status(409).json({
        message:"user id not found "
    })
}
    Object.assign(emailExist,req.body)
    await fs.writeFile('tasks/users.json',JSON.stringify(users))
    res.status(200).json({
        message:"user age updated successfully"
    })


})
    app.listen(4089,()=>{
        console.log("done");
        
    })
    }


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
    //q4
    {
    const express = require('express')
const fs=require('node:fs/promises')
const { join } = require('node:path')
const app = express()
app.use(express.json())//chunks , body >>json obj
 app.get('/user/getByname',async(req,res)=>{
    let name=req.query.name
    let users = JSON.parse(await fs.readFile('tasks/users.json',{encoding:"utf-8"}))
    let check=users.find((user)=>user.name===name)
    if(!check){
        res.status(401).json({
            message:"user name not found"
        })
    }
    else{
        res.status(200).json({
            message:check
        })
    }


 })
 app.listen(5614,()=>{
    console.log("done");
    


 })
}
 //q5
 {
 const express = require('express')
const fs=require('node:fs/promises')
const path=require('node:path')
const app = express()
app.use(express.json())//chunks , body >>json obj
app.get('/user',async(req,res)=>{
    const filePath = path.join(__dirname,'users.json')
let data = await fs.readFile(filePath,{encoding:"utf-8"})
let user = JSON.parse(data)

res.status(201).json({
    message:user
})

})
    
 app.listen(2829,()=>{
    console.log("done");
    


 })
}
//q6
{
const express = require('express')
const fs=require('node:fs/promises')
const path=require('node:path')
const app = express()
app.use(express.json());
app.get('/users/filter',async(req,res)=>{
    let minage= Number(req.query.minage)
    let filePath=path.join(__dirname,'users.json')
    let users = JSON.parse(await fs.readFile(filePath,{encoding:'utf-8'}))
    let data = users.filter((user)=>user.age>=minage)
    if(data.length>0){
        res.status(201).json({
            message:data
        })
    }else{
        res.status(401).json({
            message:"no user find"
        })
    }
})
app.listen(3792,()=>{
    console.log('done');
    
})}
//q7
{
const express = require('express')
const fs=require('node:fs/promises')
const path=require('node:path')
const app = express()
app.use(express.json())//chunks , body >>json obj
app.get('/user/:id',async(req,res)=>{
    let id = Number(req.params.id)

    const filePath = path.join(__dirname,'users.json')
let data =  JSON.parse(await fs.readFile(filePath,{encoding:"utf-8"}))
let users=data.find((user)=>user.id===id)
if(users){
res.status(201).json({
    message:users
})
}
else{
 res.status(401).json({
        message:" user id not found "
    })
}

})
    
 app.listen(3699,()=>{
    console.log("done");
    


 })
}