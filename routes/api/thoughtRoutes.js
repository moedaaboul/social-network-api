const router = require('express').Router();
const {
  getAllThoughts,
  getThought,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtController');

const { createReaction } = require('../../controllers/reactionController');

// /api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/users/:thoughtId
router
  .route('/:thoughtId')
  .get(getThought)
  .delete(deleteThought)
  .post(createReaction);

module.exports = router;
