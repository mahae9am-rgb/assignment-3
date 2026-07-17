//example1
function createCounter(init){
    let counter = init;
    return{
        increment(){
             return ++counter;
        },
        reset(){
            return counter = init;
        },
        decrement(){
             return --counter;
        }
    }
}
    const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());


 // example2
 function createCounter(init){
    let version = init;
    return{
        increment(){
            return ++version
        },
        decrement(){
            return -- version;
        },
        reset(){
            return version = init;
        }
    }
}
    const version = createCounter(0);
console.log(version.increment());
console.log(version.increment());
console.log(version.decrement());
console.log(version.reset());
console.log(version.reset());


