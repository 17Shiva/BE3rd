const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  blogs: [{
    type: mongoose.Types.ObjectId,
    ref: 'Blog'  // ✅ use model name string
  }]
});

module.exports = mongoose.model('User', userSchema);
