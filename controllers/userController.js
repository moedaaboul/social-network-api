const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
