// assiginment 2 
//q1
const http = require('node:http')
const fs=require('node:fs/promises')
let server= http.createServer(handlerequest)
 async function handlerequest(req,res){
    let { url, method}= req
    if (url==='/user'&& method==='POST'){
        let body = " "
        req.on('data',(chunk)=>body+=chunk)
        req.on('end',async()=>{
            try{
            const newuser=JSON.parse(body)
            let users= await fs.readFile('tasks/users.json',{encoding:"utf-8"})
            users=JSON.parse(users)
            let  emailexist=users.find((user)=>user.email===newuser.email)
            if(!emailexist){
                users.push(newuser)
                await fs.writeFile('tasks/users.json',JSON.stringify(users))
                res.writeHead(200, {'Content-Type':'application/json'})
                 return res.end(JSON.stringify({message:'user added successfully '}))
            }
            else{
                res.writeHead(400,{'Content-Type':'application/json'})
              return res.end(JSON.stringify({message:'user already exist'}))
            
            }
            }catch(error){
                console.log(error);
                
            }
            
        })
        
    }
 }

server.listen(3008,function(){
    console.log("server port 3008");
    
})
//q2

const http = require('node:http')
const fs=require('node:fs/promises')
let server= http.createServer(handlerequest)
 async function handlerequest(req,res){
    let { url, method}= req
    if (url.startsWith('/user/')&& method==='PATCH'){
        let body =' '
        req.on('data',(chunk)=>body+=chunk)
        req.on('end', async()=>{
        
        body=JSON.parse (body)

        
        let id = Number(url.split('/')[2])
        let users = await fs.readFile('tasks/users.json',{encoding:"utf-8"})
        users = JSON.parse(users)
         let user =users.find((user)=>user.id===id)
        if(!user){
            res.writeHead(404,{"Content-Type":"application/json"})
            res.write(JSON.stringify({message:"user id not found"}))
            return res.end()
        }

    Object.assign(user,body)
    await fs.writeFile('tasks/users.json',JSON.stringify(users))
            res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify({message:" user age update successfully"}))
        return res.end()
        
    })

    }
}
server.listen(3923,function(){
    console.log("server port 3923");
    
})
//q3

const http = require('node:http')
const fs=require('node:fs/promises')
let server= http.createServer(handlerequest)
 async function handlerequest(req,res){
    let { url, method}= req
    if (url.startsWith('/user/')&& method==='DELETE'){
        let body=" "
        req.on('data',(chunk)=>body+=chunk)
        req.on('end',async()=>{
            body=JSON.parse(body)
        let id=Number(url.split('/')[2])
        let users = await fs.readFile('tasks/users.json',{encoding:"utf-8"})
        users=JSON.parse(users)
       const user = users.find((user)=>user.id===id)
        if(!user){
             res.writeHead(401,{'Content-Type':'application/json'})
            return res.end(JSON.stringify({message:"User Id Not Found."}))
        }

        users = users.filter(user=>user.id!==id)
               await fs.writeFile('tasks/users.json',JSON.stringify(users))
            res.writeHead(200,{'Content-Type':'application/json'})
            return res.end(JSON.stringify({message:"user delete successfully."}))
        
        
        
    })
        }
    
}
server.listen(3256,function(){
    console.log("server port 3256");
    
})
//q4
//q4
const http = require('node:http')
const fs=require('node:fs/promises')
let server= http.createServer(handlerequest)
 async function handlerequest(req,res){
    let { url, method}= req
    if (url===('/user')&& method==='GET'){
            let id = Number(url.split('/')[2])
            let users = await fs.readFile('tasks/users.json',{encoding:"utf-8"})
        
            res.writeHead(200,{"Content-Type": "application/json"})
            res.write(users)
            res.end()
        
    }
        
    }
server.listen(4230,function(){
    console.log("server port 4230");
    
})




//q5
