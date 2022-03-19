const router = require('express').Router();
const {
  getUsers,
  createUser,
  getUser,
  // updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').post(createUser).get(getUsers);
// router.route('/').get(getUsers).get().post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUser).delete(deleteUser);
// router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
