function sum (a,b){
    return a+b

}
function sub(a,b){
    return a-b
}




// commonJS module system ---> Import using require()  before version 12

//to export
module.exports = {
    sum,sub
} // by using object we can export as many

// another way  / preffered more 

// module.exports.sum=sum;
// module.exports.sub-=sub;