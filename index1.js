let p = new Promise((resolve, reject) => {
    resolve("wada pura kiya");
});
p.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


let product = [
    { name: 'samsung', amount: 30000, qty: 10 },
    { name: 'Iphone', amount: 70000, qty: 15 }
];

let accountbal = 200000;

async function buyProduct(productName) {
    return new Promise((resolve, reject) => {
        let isProduct = product.find(p => p.name.toLowerCase() === productName.toLowerCase()); 
        if (isProduct) {
            resolve(isProduct.amount);
        } else {
            reject("Product not found");
        }
    });
}

async function deductbankamount(amt) {
    return new Promise((resolve, reject) => {
        if (amt > accountbal) {
            return reject("Insufficient balance");
        } else {
            accountbal -= amt;
            console.log("Available amount: ", accountbal);
            resolve("Amount deducted");
        }
    });
}

async function purchaseFlow() {
    try {
        const amount = await buyProduct("Samsung");
        console.log("Cost of device:", amount);
        const msg = await deductbankamount(amount);
        console.log("✅", msg);
    } catch (err) {
        console.log("❌", err);
    }
}

purchaseFlow();  
