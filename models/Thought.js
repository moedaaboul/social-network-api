const { Schema, Types, model } = require('mongoose');
const formatDate = require('../utils/helpers');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) =>
        formatDate(
          Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(createdAt))
        ),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// More on validation here: https://mongoosejs.com/docs/validation.html
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: [true, 'Please provide username'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (createdAt) =>
        formatDate(
          Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(createdAt))
        ),
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

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Set up the model, which is a representation for the collection
module.exports = model('thought', thoughtSchema);
