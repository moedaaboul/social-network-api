const mongoose = require('mongoose');

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
    },
    username: {
      type: String,
      required: [true, 'Please provide username'],
    },
    reactions: {
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

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Set up the model, which is a representation for the collection
module.exports = mongoose.model('Thought', thoughtSchema);
