const { Thought, User } = require('../models');

const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    const newUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );
    console.log(newUser);
    res.status(200).json({ msg: 'created new thought' });
  } catch (error) {
    console.log(error);
  }
};

const getThought = async (req, res) => {
  try {
    const response = await Thought.findOne({ _id: req.params.thoughtId });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: `No thoughts found with id` });
  }
};

const getAllThoughts = async (req, res) => {
  try {
    const response = await Thought.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: `No thoughts found`, error: error });
  }
};

module.exports = {
  getAllThoughts,
  getThought,
  createThought,
};
