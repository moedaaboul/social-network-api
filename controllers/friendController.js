const { User } = require('../models');

const addFriend = async (req, res) => {
  try {
    const newFriend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    res.status(200).json({ msg: 'added new friend', response: newFriend });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addFriend,
};
