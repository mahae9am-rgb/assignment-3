
const http = require('node:http')
const fs=require('node:fs/promises')
let server= http.createServer(handlerequest)
 async function handlerequest(req,res){
    let { url, method}= req
    if (url.startsWith('/user/')&& method==='GET'){
            let id = Number(url.split('/')[2])
            let users = JSON.parse( await fs.readFile('tasks/users.json',{encoding:"utf-8"}))
            let user= users.find((user)=>user.id===id)
        if(!user){
        res.writeHead(401,{"Content-Type": "application/json"})
          return   res.end(JSON.stringify({message:"user not found"}))
    }
        
            res.writeHead(200,{"Content-Type": "application/json"})
            res.write(JSON.stringify(user))
          return  res.end()
    }
    
        
    }
server.listen(4250,function(){
    console.log("server port 4250");
    
})