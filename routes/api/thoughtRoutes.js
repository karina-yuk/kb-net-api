const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  createReaction,
  updateThought,
  deleteThought,
  deleteReaction,
} = require("../../controllers/thoughtController");


// /api/thoughts/
router.route("/")
 .get(getThoughts)
 .post(createThought);

 // /api/thoughts/:thoughtId
 router.route("/:thoughtId")
 .get(getSingleThought)
 .put(updateThought)
 .delete(deleteThought);

 // /api/thoughts/:thoughtId/reactions
 router.route("/:thoughtId/reactions")
 .post(createReaction)

 // /api/thoughts/:thoughtId/reactions/:reactionId
 router.route("/:thoughtId/reactions/:reactionId")
 .delete(deleteReaction);

 module.exports = router;