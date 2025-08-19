const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // Middleware for parsing JSON

// Models
const User = require('./model/users');  // ✅ correct path
const Blog = require('./model/blog');   // ✅ correct path

// DB connection
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3021, () => {
      console.log("Server is running on http://localhost:3021");
    });
  })
  .catch(err => console.error(err));

// Blog routes
app.post('/blog', async (req, res) => {
  let { title, body, userId } = req.body;
  try {
    let newBlog = new Blog({
      title,
      body,
      date: new Date(),
      userId
    });
    await newBlog.save();
    res.json({
      success: true,
      data: newBlog,
      message: "Blog created successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/blog', async (req, res) => {
  try {
    let allBlogs = await Blog.find().populate('userId');
    res.json({ success: true, data: allBlogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/blog/:id', async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id).populate('userId');
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// User routes
app.post("/users", async (req, res) => {
  let { email, username, password } = req.body;
  try {
    let newUser = new User({ email, username, password });
    await newUser.save();
    res.json({
      success: true,
      data: newUser,
      message: "User added successfully!!!"
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    let allUsers = await User.find();
    res.json({ success: true, data: allUsers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Root
app.get('/', (req, res) => {
  res.send("hello world");
});
