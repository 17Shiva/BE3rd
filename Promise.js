let p = new Promise((resolve,reject)=>{
    resolve("wada pura kiya")
})
p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


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


function buyProduct(productName) {
    let pro = new Promise((resolve, reject) => {
        let isProduct = product.find(p => p.name === productName); 
        if (isProduct) {
            resolve("Product Found");
        } else {
            reject("Product not found");
        }
    });

  
    pro.then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}

buyProduct("Iphone");
buyProduct("SamSung"); 

// HW create promise for deduct amount