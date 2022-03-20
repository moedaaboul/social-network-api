const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
// More on validation here: https://mongoosejs.com/docs/validation.html
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (createdAt) =>
        Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(createdAt)),
    },
    username: {
      type: String,
      required: [true, 'Please provide username'],
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      // need to set getters is "true" due to the get method on createdAt. This doesn't affect the db, but the json output on query
      getters: true,
    },
    id: false,
  }
);

// const formatDate = (createdAt) =>
//   Intl.DateTimeFormat('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   }).format(new Date(createdAt));

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Set up the model, which is a representation for the collection
module.exports = mongoose.model('thought', thoughtSchema);
