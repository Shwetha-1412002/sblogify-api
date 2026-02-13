const mongoose = require('mongoose');

 chore/deployment-config
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
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    }
  },
  { timestamps: true }
);
feat/finalize-module2-architecture

module.exports = mongoose.model('User', userSchema);
