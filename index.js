const express = require('express')
const app = express();

app.get('/',(req,res) => {
    // res.send("Hello world")
    res.send("<h1>Hello</h1>")
    // res.send(__dirname+'/index.html')

    // res.json({
    //     name:"Nitesh",
    //     age: 21
    // })
    // res.end("hi")


})

// Path variable 
 // Query Parameters
app.get('/watch' , (req,res)=>{
    let videoId = req.query.v;
    let nid = req.query.n;
    res.send("id got it",videoId,nid);
} )


 // Params

 app.get('watch/:v',(req,res)=>{
    console.log(req.params.v) 
    console.log(req.params.n)
    res.send("got it !!!!!");
 })

app.listen(3001,()=>{
    console.log("server running at http://localhost:3001 ");
}); // starts the server on port 3001