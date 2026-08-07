// question 1 : Output Example: {F: “/home/uileser/project/index.js”, Dir: “/home/user/project”}
function __filename(path){
    return 'F: “/home/uileser/project/index.js”'
}
function __direname(path){
    return 'Dir: “/home/user/project”';
    
}
console.log(__filename() + ',' + __direname())
// question 2 /user/files/report.pdf • Output Example:"report.pdf
const path = require('node:path')


let result= path.basename('/user/files/report.pdf')
console.log(result);
// question 3
let path2= { dir:"/folder", name:"app", ext:".js"};
console.log(path.format(path2));
// question 4 
const x = path.extname('/docs/readme.md')
console.log(x);
// question 5 /home/app/main.js Output Example:{Name: “main”, Ext:“.js”}
let y = path.parse('/home/app/main.js');
 const r = {
     Name : y.name,
     ext : y.ext
 }
 console.log(r);
 // q 6    /home/user/file.txt  Output Example: true
let c = path.isAbsolute('/home/user/file.txt')
 console.log(c);
 // q 7 Input:"src","components", "App.js"
 let oc = path.join("src","components", "App.js")
 console.log(oc);
 // q 8 ./index.js ,  Output Example: /home/user/project/src/index.js

 let relative='./index.js '
 let absolute = path.resolve(relative);
 console.log(absolute);
 //q 9 /folder1, folder2/file.txt  Output Example: /folder1/folder2/file.txt
let str ='/folder1, folder2/file.txt'
let parts = str.split(',')
console.log(path.join(...parts));
 // q10  /path/to/file.txt Output Example: The file.txt is deleted.
const fs = require('node:fs')  


function deletefile(){
let file = '/path/to/file.txt'
return console.log('the file.txt is deleted');
}
deletefile();
// q 11
  function createfolder(folder){
  }
  createfolder()
console.log('sucess');

 //q 12 
 const {EventEmitter}=require('node:events')
const event = new EventEmitter();
event.on('start',function(){
    console.log('welcome event triggered');
})
event.emit('start')

// q13
    let nam ='Ahmed'
event.on('login',function(){
  console.log(`User logged in: ${nam}`);
})
 event.emit('login')

// q14
let you = fs.readFileSync('./tasks/notes.txt','utf-8')
if(you){
    console.log( `the file content => ${you}`);   
}
// q15 "./async.txt", content: "Async save"
 fs.writeFile('./async.txt',
    'Async save',
    {flag:'w'},
    (err)=>{
    if(err){
     return console.log(err);
}

console.log('Async save')})

//q16 
let q = './tasks/notes.txt'
console.log(fs.existsSync(q));
//q17 {Platform: “win32”, Arch: “x64”}
const os = require('node:os'); 
function getSystemInfo(){
    return {
        platform:os.platform(),
        Arch:os.arch()
    }
}
console.log(getSystemInfo());

//q18
let readstream = fs.createReadStream('./tasks/big.txt','utf-8')

readstream.on('data',(chunk)=>{
        console.log(chunk)
})
//q19 "./source.txt", "./dest.txt"
const dataa = fs.readFileSync("./tasks/source.txt","utf-8")
console.log(dataa);
fs.writeFileSync("./tasks/dest.txt",dataa)
//q20 
const {pipeline}= require('node:stream/promises');
async function copyline(){
    await pipeline (
        fs.createReadStream('/data.txt'),
        fs.createWriteStream('data.txt.gz')
    )
    console.log('done');
    
}
