const router = require('express').Router();
const {
  getAllThoughts,
  getThought,
  createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getThought);

module.exports = router;
