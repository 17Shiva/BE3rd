const fs = require('fs')
console.log(fs) // top level code
console.log("hello")
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multiply(a,b){
    return a*b;
}

fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log(data)
}) // when to print or anything done by event loop

console.log(add(2,3))
sub(5,6);
multiply(3,2);

console.log("exit")

// JavaScript , node js ,  uses a single-threaded(by default synchronous) event loop model, meaning code runs sequentially unless asynchronous behavior is used.
// synchornous (code run line by line )
// Thread is single task that runs in the process
// this is a program when it runs it is taken as a process(set of tasks) then into threads(task) 
// learn about callstack