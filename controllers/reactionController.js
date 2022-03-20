const { Thought } = require('../models');

const createReaction = async (req, res) => {
  try {
    const newReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );
    res.status(200).json({ msg: 'added new friend', response: newReaction });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createReaction,
};