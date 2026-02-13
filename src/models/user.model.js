const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true, // INDEX
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
