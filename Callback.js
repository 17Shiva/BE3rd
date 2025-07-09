// function buyProduct(product_name,cb){
//     setTimeout(()=>{
//         console.log("all the i/o is completed and order details ")
//         cb();
//     },0)
//     console.log(product_name);
// }

// buyProduct("Iphone16",function(){
//     console.log("Product is purchased")
// })





function buyProduct(product_Name,cb){
    let isProduct = product.find(p=> p.name == product_Name) // return true/false
    if(!isProduct){
        cb("Product is not available",null)
    }
    else {  cb(null,isProduct.amount); }
  
}
let product = [
    {
        name:'samsung',
        amount: 30000,
        qty : 10
    },
    {
        name : 'Iphone',amount : 70000 , qty : 15
    }
]

let accountbal= 6000000;
function deductbankamount(amount,cb){
    // do some transactions
    if(amount>accountbal){
        return cb("bank Banlence is low ",null);
    }

    else{
        accountbal=accountbal-amount;
        cb(null,"Amount deducted");
        cb(null,"Amount deducted");
    }

}

buyProduct("Iphone",function(err,amount){
    if(err){
        console.log('Error : ',err);
    }
    else{
        console.log("Product Amount: ",amount)
    }

    // console.log(amount);
    deductbankamount(amount,function(err,amount){
        if(err){
            console.log(err);
        }
        else{
            console.log(amount)
        }
    })
})

