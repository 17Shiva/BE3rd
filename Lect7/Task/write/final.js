const fs = require('fs')

fs.readFile("../user1.txt","utf-8",function(err,data){
    if(err) return err;
    const val1 = JSON.parse(data);
    fs.readFile("../user2.txt","utf-8", function(err,data1){
        if(err) return err;
        const val2 = JSON.parse(data1);

        const conscat = data1.concat(data2)
          const maindata = [...val1, ...val2];
        fs.writeFile("../Main.txt",JSON.stringify(maindata),function(err,data){
            if(err) return err;
            console.log("all data done");
        })
    })
})