// Static Files

const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true })); // to parse form data...

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})


app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html")
})

app.post('/adduser',(req,res)=>{
    const name = req.body.name;
    const pass = req.body.password;

    res.json({
        name,
        pa
    })
    console.log("User:", name, pass);
    res.send(`Welcome, ${name}!`);

    // res.json  // important

})

app.listen(3001,()=>{
    console.log("server started at http://localhost:3001");
})