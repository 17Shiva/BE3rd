const express = require('express')
const mongoose = require('mongoose');
const Blogs = require('./model/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/blogs", async (req, res) => {
    let { title, body } = req.body;
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now()
    });
    await newBlog.save();
    res.json({
        success: true,
        data: newBlog,
        message: "blog added successfully"
    });
});



app.get("/blogs",async (req,res)=>{
    let allblog = await Blogs.find();
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id", async (req,res)=>{
    let {id} = req.params
    let blog=  await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
})

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3101, () => {
    console.log("server started at http://localhost:3101");
});

mongoose.connect('mongodb://127.0.0.1:27017/G26')
    .then(() => console.log('Connected!'));
