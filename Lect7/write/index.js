const fs = require('fs');  
let users =[
    {
        name:"nitesh",
        age:24,
        address: "delhi"
    },
    {
        name: "Ritik",
        age:25,
        address:"Faridabad"
    }
]
const data = JSON.stringify(users, null, 2);

fs.writeFile("../user.txt",data,function(err,data){
    if(err) return err;
    console.log("users : written");
})

