const fs = require('fs')
let data1 = [
    {
        name :"vansh",
        age: 20
    },
    {
        name : "saiesh",
        age: 19
    }
]

let data2 = [
    {
        name :"hello",
        age: 20
    },
    {
        name : "sarna",
        age: 19
    }
]


fs.writeFile("../user1.txt",JSON.stringify(data1),function(err,data){
    if(err) return err;
})


fs.writeFile("../user2.txt",JSON.stringify(data2),function(err,data){
    if(err) return err;
})

