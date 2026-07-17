//(question 1)
let x="123";
console.log(+x+7);
//(question2)
let y=0;
if( !y ){
console.log("invalid")
}
//(question 3)
for (let i=1; i <=10; i++){
    if(i %2 ==0){
        continue;
    }
    console.log(i)
}
//question(4)
let arr=[1,2,3,4,5];
function value(number){
    return number % 2 == 0;
}
let resultfilter=arr.filter(value)

console.log(resultfilter);
//question(5)
let arr1=[1,2,3]
let arr2=[4,5,6]
const twoarr=[...arr1,...arr2]
console.log(twoarr)
//(question6)
let day = 2;
switch(day){
case 1:
    console.log("sunday");
    break;
case 2:
    console.log("monday");
    break;
case 3:
    console.log("tuesday");
    break;
case 4:
    console.log("Wednesday");
    break;
case 5:
    console.log("Thursday");
    break;
case 6:
    console.log("Friday");
    break;
case 7:
    console.log("Saturday");
    break;
}
//(question 7)
let arr3=["a","ab","abc"]
let modifiedmap=arr3.map((value)=>{
    return value.length;
})
console.log(modifiedmap);
//(question 8)
let b = 15
if( b % 3 ==0 && x % 5 ==0){
}
    console.log("Divisible by both");
//(question 9)
    let square = x => x*x 
    console.log(square(5));
//(question 10)
const person ={
    name:"john", age:25
}
let {name,age} = person;
console.log(`${person.name} is ${person.age} years old`);
//(question 11)
function sum (x,y,z,a,s){
    return x+y+z+a+s;
}
let result = sum(1,2,3,4,5)
console.log(result)
//(question 12)
function myfunction(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("sucess")},3000)
        })
        }
        myfunction().then((result)=>{
            console.log(result)
        })

//(question13)
let numbers=[1,3,7,2,4]
let answer=Math.max(...numbers);
console.log(answer)
//(question 14)
let k ={
    name:"john",age:30
}
console.log(Object.keys(k))
//(question 15)
let text="The quick brown fox";
console.log(text.split(" "))
//(EASY QUESTIONS)
//(question 1)
//for each work with array[] only ,for of work with arr/map/str
//for each
let v=[1,2,6]
v.forEach((item) =>{
    console.log(item)
});
//for of
let u = [1,2,3,4,5,6]
for(let number of u ){
    if(number===4){
        break;
    }
        console.log(number)

}
//(question 2)
// Hoisting is JavaScript's default behavior of moving declarations to the top.
var q;
console.log(q)
q=2;
//A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
//console.log(d);
//let d =5;
//(question 3)
// == compras values only
console.log(5=="5");
//return true
// === compras values and their type
console.log(1===true);
//return false
//(question 4)
// try statement is used to handle errors;
//The catch block executes only if an error occurs in the try block.
try{
    function sum(m,n){
        return m+n;
    }
    console.log(sub(5,6));
} catch(error){
    console.log(error.message)
}
// async function
//async function test(){
  //  try{
    //let result3= await fetch("demo.text");
    //console.log(result3)
//}
//catch(error){
  //  console.log(error.message)
//}
//}
test();
//(question5)
//type converction
//string to number 
let c1="1"
console.log(Number(c1));
//type coercion
//string+number
let r1=2;
let r2="2"
console.log(r1+r2);


