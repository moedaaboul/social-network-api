const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends');
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: `No users found with id` });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(404).json({ msg: `No users found`, error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.userId });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: `No users found`, error: error });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  deleteUser,
};
