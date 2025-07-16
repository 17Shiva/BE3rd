const fs = require('fs');

fs.readFile("../user.txt",function(err,data){
    if(err) return err;
    const val = JSON.parse(data);
    console.log(val)
    console.log(data[0])
    console.log(val[0])

})

