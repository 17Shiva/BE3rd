const fs = require('fs');
fs.writeFile('../demo.txt',"G26 Hello",function(err,data){ // this function run when file gets readed
        if(err){
            return console.log(err);
        }
        console.log("Succesfully done "); // data nhi ayega kyuiki huma write kar rhe h ...
})

fs.writeFile('../demo2.txt',"Creating new File and writing something ",function(err){ // this function run when file gets readed
        if(err){
            return console.log(err);
        }
        console.log("Succesfully done "); // data nhi ayega kyuiki huma write kar rhe h ...
})