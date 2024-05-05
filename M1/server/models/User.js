// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cart:{
    type:Array
  }
  // Add other user-specific fields as needed
});
 
const User=mongoose.model('User', userSchema);
module.exports = User
