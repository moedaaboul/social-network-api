const router = require('express').Router();
const {
  getUsers,
  createUser,
  getUser,
  // updateUser,
  deleteUser,
} = require('../../controllers/userController');

const { addFriend } = require('../../controllers/friendController');

// /api/users
router.route('/').post(createUser).get(getUsers);
// router.route('/').get(getUsers).get().post(createUser);

router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId
router.route('/:userId').get(getUser).delete(deleteUser);
// router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
