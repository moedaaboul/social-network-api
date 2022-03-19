const mongoose = require('mongoose');

// More on validation here: https://mongoosejs.com/docs/validation.html
const userSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Set up the model, which is a representation for the collection
module.exports = mongoose.model('User', userSchema);
