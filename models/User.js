const mongoose = require('mongoose');

// More on validation here: https://mongoosejs.com/docs/validation.html
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide name'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      'Please provide valid email',
    ],
    unique: true,
  },
  thoughts: {
    type: Array,
    default: [],
  },
  friends: {
    type: Array,
    default: [],
  },
});

// Set up the model, which is a representation for the collection
module.exports = mongoose.model('User', UserSchema);
